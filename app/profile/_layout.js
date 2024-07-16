import { Slot } from "expo-router"
import ProfileLayout from "../../components/profile-layout/ProfileLayout"

export default function Layout() {
	return (
		<ProfileLayout>
			<Slot />
		</ProfileLayout>
	)
}
