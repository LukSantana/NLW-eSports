import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Link } from "react-router-dom";

import logo from "../assets/Logo.svg";

import { GameBanner } from "../components/GameBanner";
import { CreateAdBanner } from "../components/CreateAdBanner";
import { CreateAdModal } from "../components/CreateAdModal";
import axios from "axios";
import { baseApiUrl } from "../api/mainApi";

export const Home = () => {
	const [games, setGames] = useState<Game[]>([]);

	interface Game {
		id: string;
		title: string;
		bannerUrl: string;
		_count: {
			ads: number;
		};
	}

	useEffect(() => {
		axios(`${baseApiUrl}/games`).then((response) => {
			setGames(response.data);
		});
	}, []);

	return (
		<div className="max-w-[1344px] mx-auto flex flex-col items-center m-20 px-20">
			<img src={logo} alt="" />

			<h1 className="text-6xl text-white font-black mt-20 text-center">
				Seu{" "}
				<span className="text-transparent bg-nlw-gradient bg-clip-text">
					duo
				</span>{" "}
				está aqui.
			</h1>
			<div className="grid sm:grid-cols-1 xl:grid-cols-6 gap-6 mt-16 items-flex-start">
				{games.map((game) => {
					return (
						<Link to={`/games/${game.id}/ads`}>
							<GameBanner
								key={game.id}
								bannerUrl={game.bannerUrl}
								title={game.title}
								adsCount={game._count.ads}
							/>
						</Link>
					);
				})}
			</div>

			<Dialog.Root>
				<CreateAdBanner />
				<CreateAdModal />
			</Dialog.Root>
		</div>
	);
};
