import { useState } from "react"
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet
} from "react-native"
import { useRouter } from "expo-router"
import { Entypo } from "@expo/vector-icons"
import SignUpFormNextButton from "../../../components/sign-up-form-next-button/SignUpFormNextButton"

export default function Page() {
	const router = useRouter()

	const [checked, setChecked] = useState(false)

	const handleNext = () => {
		router?.navigate("/sign-up/step-2")
	}

	return (
		<View style={styles.container}>
			<Text style={styles.titleText}>
				Let{"'"}s start! it should only take a few moments.
			</Text>
			<View style={styles.inputFieldContainer}>
				<View style={styles.inputFieldTitleContainer}>
					<Text style={styles.inputFieldTitleText}>First Name</Text>
					<Text style={styles.requiredMarker}>*</Text>
				</View>
				<TextInput style={styles.inputField} inputMode="text" />
			</View>
			<View style={styles.inputFieldContainer}>
				<View style={styles.inputFieldTitleContainer}>
					<Text style={styles.inputFieldTitleText}>Last Name</Text>
					<Text style={styles.requiredMarker}>*</Text>
				</View>
				<TextInput style={styles.inputField} inputMode="text" />
			</View>
			<View style={styles.inputFieldContainer}>
				<View style={styles.inputFieldTitleContainer}>
					<Text style={styles.inputFieldTitleText}>
						Personal Email
					</Text>
					<Text style={styles.requiredMarker}>*</Text>
				</View>
				<TextInput style={styles.inputField} inputMode="email" />
			</View>
			<View style={styles.inputFieldContainer}>
				<View style={styles.inputFieldTitleContainer}>
					<Text style={styles.inputFieldTitleText}>
						Personal Phone Number
					</Text>
					<Text style={styles.requiredMarker}>*</Text>
				</View>
				<TextInput style={styles.inputField} inputMode="tel" />
			</View>
			<View style={styles.inputFieldContainer}>
				<View style={styles.inputFieldTitleContainer}>
					<Text style={styles.inputFieldTitleText}>Password</Text>
					<Text style={styles.requiredMarker}>*</Text>
				</View>
				<TextInput
					style={styles.inputField}
					inputMode="text"
					secureTextEntry
				/>
			</View>
			<View style={styles.inputFieldContainer}>
				<View style={styles.inputFieldTitleContainer}>
					<Text style={styles.inputFieldTitleText}>Gender</Text>
					<Text style={styles.requiredMarker}>*</Text>
				</View>
				<TextInput style={styles.inputField} inputMode="text" />
			</View>
			<View style={styles.checkboxWrapper}>
				<TouchableOpacity
					style={styles.checkbox}
					onPress={() => {
						setChecked(!checked)
					}}
				>
					{checked && <Entypo name="check" size={10} color="white" />}
				</TouchableOpacity>
				<Text style={styles.checkboxText}>You are 18 plus</Text>
			</View>
			<SignUpFormNextButton handleNext={handleNext} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "column",
		gap: 10
	},
	titleText: {
		fontSize: 20,
		fontWeight: "bold"
	},
	inputFieldContainer: {
		width: "100%",
		flexDirection: "column",
		gap: 7.5
	},
	inputFieldTitleContainer: {
		flexDirection: "row",
		gap: 2
	},
	inputFieldTitleText: {
		fontSize: 15
	},
	requiredMarker: {
		fontSize: 15,
		color: "#E35F21"
	},
	inputField: {
		height: 45,
		width: "100%",
		borderRadius: 10,
		borderWidth: 1,
		paddingHorizontal: 12.5,
		fontSize: 17.5
	},
	checkboxWrapper: {
		flexDirection: "row",
		alignItems: "center",
		gap: 15
	},
	checkbox: {
		height: 12.5,
		width: 12.5,
		backgroundColor: "black",
		marginVertical: 5,
		alignItems: "center",
		justifyContent: "center"
	},
	checkboxText: {
		color: "#E35F21",
		fontWeight: "600"
	}
})
