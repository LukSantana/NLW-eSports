import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

import { baseApiUrl } from "../../services/mainApi";

import { GameParams } from "../../@types/navigation";

import { Background } from "../../components/Background";
import { Heading } from "../../components/Heading";
import { DuoCard, DuoCardProps } from "../../components/DuoCard";
import { DuoMatch } from "../../components/DuoMatch";

import logoImg from "../../assets/logo-nlw-esports.png";

import { styles } from "./styles";

import { THEME } from "../../theme";

export function Game() {
	const [duos, setDuos] = useState<DuoCardProps[]>([]);
	const [discordDuoSelected, setDiscordDuoSelected] = useState("");

	const navigation = useNavigation();
	const route = useRoute();
	const game = route.params as GameParams;

	function handleGoBack() {
		navigation.goBack();
	}

	async function getDiscordUser(adsId: string) {
		fetch(`${baseApiUrl}/ads/${adsId}/discord`)
			.then((res) => res.json())
			.then((data) => setDiscordDuoSelected(data.discord));
	}

	useEffect(() => {
		fetch(`${baseApiUrl}/games/${game.id}/ads`)
			.then((res) => res.json())
			.then((data) => setDuos(data));
	}, []);

	return (
		<Background>
			<SafeAreaView style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity onPress={handleGoBack}>
						<Entypo
							name="chevron-thin-left"
							color={THEME.COLORS.CAPTION_300}
							size={20}
						/>
					</TouchableOpacity>
					<Image source={logoImg} style={styles.logo} />
					<View style={styles.right} />
				</View>

				<Image
					source={{ uri: game.bannerUrl }}
					style={styles.cover}
					resizeMode="cover"
				/>

				<Heading title={game.title} subtitle="Conecte-se e vamos jogar" />
				<FlatList
					data={duos}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<DuoCard data={item} onConnect={() => getDiscordUser(item.id)} />
					)}
					horizontal
					style={[styles.containerList]}
					contentContainerStyle={[
						duos.length > 0 ? styles.contentList : styles.emptyListContent,
					]}
					showsHorizontalScrollIndicator={false}
					ListEmptyComponent={() => (
						<Text style={styles.emptyListText}>
							Não há anúncios publicados ainda.
						</Text>
					)}
				/>

				<DuoMatch
					visible={discordDuoSelected.length > 0}
					discord={discordDuoSelected}
					onClose={() => setDiscordDuoSelected("")}
				/>
			</SafeAreaView>
		</Background>
	);
}
