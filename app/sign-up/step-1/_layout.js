import { KeyboardAvoidingView, ScrollView, StyleSheet } from "react-native"
import { Slot } from "expo-router"
import SignUpLayout from "../../../components/sign-up-layout/SignUpLayout"

export default function Layout() {
	return (
		<KeyboardAvoidingView style={styles.container}>
			<ScrollView>
				<SignUpLayout>
					<Slot />
				</SignUpLayout>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
