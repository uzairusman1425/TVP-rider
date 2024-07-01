import {
	KeyboardAvoidingView,
	ScrollView,
	Platform,
	StyleSheet
} from "react-native"
import { Slot } from "expo-router"
import { LinearGradient } from "expo-linear-gradient"

export default function Layout() {
	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<LinearGradient
				style={styles.backgroundGradient}
				colors={["#FE5C25", "#000000"]}
			>
				<ScrollView>
					<Slot />
				</ScrollView>
			</LinearGradient>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	backgroundGradient: {
		flex: 1
	}
})
