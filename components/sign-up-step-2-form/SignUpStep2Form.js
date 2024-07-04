import { useState, useEffect } from "react"
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	StyleSheet
} from "react-native"
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming
} from "react-native-reanimated"
import { FontAwesome5 } from "@expo/vector-icons"
import PropTypes from "prop-types"
import SignUpFormNextButton from "../sign-up-form-next-button/SignUpFormNextButton"

export default function SignUpStep2Form({ setCurrentStep }) {
	const rotation = useSharedValue(0)

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ rotateZ: `${rotation.value}deg` }]
	}))

	const vehicleOptions = ["Bike", "Car", "Scooty"]

	const [showVehicleTypeDropDown, setShowVehicleTypeDropDown] =
		useState(false)
	const [selectedVehicle, setSelectedVehicle] = useState(vehicleOptions[0])
	const [registrationNumber, setRegistrationNumber] = useState("")
	const [licenseNumber, setLicenseNumber] = useState("")

	const handleNext = () => {
		setCurrentStep(3)
	}

	useEffect(() => {
		rotation.value = withTiming(showVehicleTypeDropDown ? 180 : 0, {
			duration: 350
		})
	}, [showVehicleTypeDropDown])

	return (
		<View style={styles.formContainer}>
			<Text style={styles.titleText}>
				Tell us About your Business Type
			</Text>
			<View style={styles.inputFieldContainer}>
				<View style={styles.inputFieldTitleContainer}>
					<Text style={styles.inputFieldTitleText}>Vehicle Type</Text>
					<Text style={styles.requiredMarker}>*</Text>
				</View>
				<View style={styles.selectInputField}>
					<Text style={styles.selectedOptionText}>
						{selectedVehicle}
					</Text>
					<TouchableOpacity
						onPress={() => {
							setShowVehicleTypeDropDown(!showVehicleTypeDropDown)
						}}
					>
						<Animated.View style={animatedStyle}>
							<FontAwesome5
								name="chevron-down"
								size={15}
								color="#E35F21"
							/>
						</Animated.View>
					</TouchableOpacity>
					{showVehicleTypeDropDown && (
						<View style={styles.selectInputDropdown}>
							{vehicleOptions?.map((item, key) => {
								return (
									<TouchableOpacity
										onPress={() => {
											setSelectedVehicle(item)
											setShowVehicleTypeDropDown(false)
										}}
										key={key}
									>
										<Text style={styles.selectOptionText}>
											{item}
										</Text>
									</TouchableOpacity>
								)
							})}
						</View>
					)}
				</View>
				<View style={styles.inputFieldContainer}>
					<View style={styles.inputFieldTitleContainer}>
						<Text style={styles.inputFieldTitleText}>
							Registration Number
						</Text>
						<Text style={styles.requiredMarker}>*</Text>
					</View>
					<TextInput
						style={styles.inputField}
						inputMode="text"
						value={registrationNumber}
						onChangeText={setRegistrationNumber}
					/>
				</View>
				<View style={styles.inputFieldContainer}>
					<View style={styles.inputFieldTitleContainer}>
						<Text style={styles.inputFieldTitleText}>
							License Number
						</Text>
						<Text style={styles.requiredMarker}>*</Text>
					</View>
					<TextInput
						style={styles.inputField}
						inputMode="text"
						value={licenseNumber}
						onChangeText={setLicenseNumber}
					/>
				</View>
				<View style={styles.inputFieldContainer}>
					<View style={styles.inputFieldTitleContainer}>
						<Text style={styles.inputFieldTitleText}>
							A Picture of Vehicle
						</Text>
						<Text style={styles.requiredMarker}>*</Text>
					</View>
					<View style={styles.imageInputField}>
						<Image
							source={require("../../assets/icons/upload-cloud.png")}
							style={styles.uploadIcon}
							resizeMode="contain"
						/>
					</View>
				</View>
				<View style={styles.inputFieldContainer}>
					<View style={styles.inputFieldTitleContainer}>
						<Text style={styles.inputFieldTitleText}>
							A Picture of License
						</Text>
						<Text style={styles.requiredMarker}>*</Text>
					</View>
					<View style={styles.imageInputField}>
						<Image
							source={require("../../assets/icons/upload-cloud.png")}
							style={styles.uploadIcon}
							resizeMode="contain"
						/>
					</View>
				</View>
			</View>
			<SignUpFormNextButton handleNext={handleNext} />
		</View>
	)
}

const styles = StyleSheet.create({
	titleText: {
		fontSize: 20,
		fontWeight: "bold"
	},
	formContainer: {
		width: "100%",
		flexDirection: "column",
		gap: 10,
		zIndex: 10
	},
	inputFieldContainer: {
		width: "100%",
		flexDirection: "column",
		gap: 7.5,
		zIndex: 10
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
	selectInputField: {
		height: 45,
		width: "100%",
		borderRadius: 10,
		borderWidth: 1,
		paddingHorizontal: 12.5,
		fontSize: 17.5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		position: "relative",
		zIndex: 20
	},
	selectInputDropdown: {
		position: "absolute",
		bottom: -102,
		left: 0,
		height: 100,
		width: "107.5%",
		borderRadius: 10,
		backgroundColor: "white",
		elevation: 5,
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.5,
		shadowRadius: 3,
		flexDirection: "column",
		justifyContent: "space-evenly",
		paddingHorizontal: 15
	},
	selectOptionText: {
		fontSize: 15,
		fontWeight: "500",
		color: "gray"
	},
	selectedOptionText: {
		fontSize: 15,
		fontWeight: "500"
	},
	imageInputField: {
		height: 115,
		width: "100%",
		borderRadius: 15,
		borderWidth: 0.5,
		borderColor: "lightgrey",
		backgroundColor: "white",
		elevation: 5,
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.5,
		shadowRadius: 3,
		alignItems: "center",
		justifyContent: "center"
	},
	uploadIcon: {
		height: 50,
		width: 50
	}
})

SignUpStep2Form.propTypes = {
	setCurrentStep: PropTypes.func.isRequired
}
