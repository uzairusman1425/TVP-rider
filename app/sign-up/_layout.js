import { Slot } from "expo-router"
import SignUpLayout from "../../components/sign-up-layout/SignUpLayout"

export default function Layout() {
	return (
		<SignUpLayout>
			<Slot />
		</SignUpLayout>
	)
}
