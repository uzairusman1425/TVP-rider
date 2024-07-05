import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import PropTypes from "prop-types"
import { Feather } from "@expo/vector-icons"
import SignUpFormNextButton from "../sign-up-form-next-button/SignUpFormNextButton"

export default function SignUpStep7Form({ setCurrentStep }) {
	const handleNext = () => {
		setCurrentStep(8)
	}

	return (
		<View style={styles.formContainer}>
			<Text style={styles.titleText}>Preview details</Text>
			<View style={styles.detailsSection}>
				<View style={styles.detailsHeaderContainer}>
					<Text style={styles.detailsTitleText}>
						Personal Details
					</Text>
					<TouchableOpacity
						onPress={() => {
							setCurrentStep(1)
						}}
					>
						<Feather name="edit-2" size={15} color="#E35F21" />
					</TouchableOpacity>
				</View>
				<View style={styles.detailsContainer}>
					<Text style={styles.detailHeadingText}>First Name</Text>
					<Text style={styles.detailText}>Tony</Text>
				</View>
				<View style={styles.detailsContainer}>
					<Text style={styles.detailHeadingText}>Last Name</Text>
					<Text style={styles.detailText}>Hunt</Text>
				</View>
				<View style={styles.detailsContainer}>
					<Text style={styles.detailHeadingText}>Personal Email</Text>
					<Text style={styles.detailText}>tonyhunt@gmail.com</Text>
				</View>
				<View style={styles.detailsContainer}>
					<Text style={styles.detailHeadingText}>
						Personal Phone Number
					</Text>
					<Text style={styles.detailText}>+923351234567</Text>
				</View>
				<View style={styles.detailsContainer}>
					<Text style={styles.detailHeadingText}>Gender</Text>
					<Text style={styles.detailText}>Male</Text>
				</View>
			</View>
			<View style={styles.horizontalDashedLine} />
			<View style={styles.detailsSection}>
				<View style={styles.detailsHeaderContainer}>
					<Text style={styles.detailsTitleText}>
						Business Details
					</Text>
					<TouchableOpacity
						onPress={() => {
							setCurrentStep(2)
						}}
					>
						<Feather name="edit-2" size={15} color="#E35F21" />
					</TouchableOpacity>
				</View>
				<View style={styles.detailsContainer}>
					<Text style={styles.detailHeadingText}>Vehicle Type</Text>
					<Text style={styles.detailText}>Car</Text>
				</View>
				<View style={styles.detailsContainer}>
					<Text style={styles.detailHeadingText}>
						Registration Number
					</Text>
					<Text style={styles.detailText}>AKE-313A232</Text>
				</View>
				<View style={styles.detailsContainer}>
					<Text style={styles.detailHeadingText}>License Number</Text>
					<Text style={styles.detailText}>A13E-313A232</Text>
				</View>
			</View>
			<View style={styles.horizontalDashedLine} />
			<View style={styles.detailsSection}>
				<View style={styles.detailsHeaderContainer}>
					<Text style={styles.detailsTitleText}>
						Location Details
					</Text>
					<TouchableOpacity
						onPress={() => {
							setCurrentStep(3)
						}}
					>
						<Feather name="edit-2" size={15} color="#E35F21" />
					</TouchableOpacity>
				</View>
				<View style={styles.detailsContainer}>
					<Text style={styles.detailHeadingText}>Home Address</Text>
					<Text style={styles.detailText}>
						Galaxy Hotel opp PSO pump
					</Text>
				</View>
				<View style={styles.detailsContainer}>
					<Text style={styles.detailHeadingText}>State</Text>
					<Text style={styles.detailText}>Sindh</Text>
				</View>
				<View style={styles.detailsContainer}>
					<Text style={styles.detailHeadingText}>City</Text>
					<Text style={styles.detailText}>Karachi</Text>
				</View>
				<View style={styles.detailsContainer}>
					<Text style={styles.detailHeadingText}>Area</Text>
					<Text style={styles.detailText}>Shara-e-Faisal</Text>
				</View>
				<View style={styles.detailsContainer}>
					<Text style={styles.detailHeadingText}>
						Additional Details
					</Text>
					<Text style={styles.detailText}>Shahnawaz Autos</Text>
				</View>
			</View>
			<View style={styles.horizontalDashedLine} />
			<View style={styles.detailsSection}>
				<View style={styles.detailsHeaderContainer}>
					<Text style={styles.detailsTitleText}>Bank Details</Text>
					<TouchableOpacity
						onPress={() => {
							setCurrentStep(4)
						}}
					>
						<Feather name="edit-2" size={15} color="#E35F21" />
					</TouchableOpacity>
				</View>
				<View style={styles.detailsContainer}>
					<Text style={styles.detailHeadingText}>Bank Name</Text>
					<Text style={styles.detailText}>HBL Bank</Text>
				</View>
				<View style={styles.detailsContainer}>
					<Text style={styles.detailHeadingText}>
						Bank Account Holder Name
					</Text>
					<Text style={styles.detailText}>Tony</Text>
				</View>
				<View style={styles.detailsContainer}>
					<Text style={styles.detailHeadingText}>
						Bank Account Number
					</Text>
					<Text style={styles.detailText}>3545135546513</Text>
				</View>
				<View style={styles.detailsContainer}>
					<Text style={styles.detailHeadingText}>
						Billing Address
					</Text>
					<Text style={styles.detailText}>Karachi</Text>
				</View>
			</View>
			<View style={styles.horizontalDashedLine} />
			<View style={styles.detailsSection}>
				<View style={styles.detailsHeaderContainer}>
					<Text style={styles.detailsTitleText}>
						Emergency Backup Details
					</Text>
					<TouchableOpacity
						onPress={() => {
							setCurrentStep(5)
						}}
					>
						<Feather name="edit-2" size={15} color="#E35F21" />
					</TouchableOpacity>
				</View>
				<View style={styles.detailsContainer}>
					<Text style={styles.detailHeadingText}>
						Point of Contact Name
					</Text>
					<Text style={styles.detailText}>Hamza</Text>
				</View>
				<View style={styles.detailsContainer}>
					<Text style={styles.detailHeadingText}>Contact Number</Text>
					<Text style={styles.detailText}>+923351234567</Text>
				</View>
				<View style={styles.detailsContainer}>
					<Text style={styles.detailHeadingText}>Relationship</Text>
					<Text style={styles.detailText}>Mother</Text>
				</View>
			</View>
			<View style={styles.horizontalDashedLine} />
			<View style={styles.detailsSection}>
				<View style={styles.detailsHeaderContainer}>
					<Text style={styles.detailsTitleText}>
						Upload Your ID Card Picture
					</Text>
					<TouchableOpacity
						onPress={() => {
							setCurrentStep(6)
						}}
					>
						<Feather name="edit-2" size={15} color="#E35F21" />
					</TouchableOpacity>
				</View>
				<View style={styles.detailsContainer}>
					<Text style={styles.detailHeadingText}>Birth Date</Text>
					<Text style={styles.detailText}>24/8/1992</Text>
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
		gap: 10
	},
	detailsSection: {
		width: "100%",
		flexDirection: "column",
		gap: 15
	},
	detailsHeaderContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	detailsTitleText: {
		fontSize: 15,
		fontWeight: "500",
		color: "#E35F21"
	},
	detailsContainer: {
		flexDirection: "column",
		gap: 5
	},
	detailHeadingText: {
		fontSize: 15
	},
	detailText: {
		fontSize: 15,
		color: "grey"
	},
	horizontalDashedLine: {
		height: 1,
		width: "100%",
		borderWidth: 1,
		borderStyle: "dotted",
		borderColor: "#E35F21",
		marginVertical: 5
	}
})

SignUpStep7Form.propTypes = {
	setCurrentStep: PropTypes.func.isRequired
}
