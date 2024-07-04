import { useEffect } from "react"
import { View, Text, StyleSheet } from "react-native"
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming
} from "react-native-reanimated"
import PropTypes from "prop-types"

export default function SignUpProgress({ currentStep }) {
	const width = useSharedValue(0)

	const animatedStyle = useAnimatedStyle(() => ({
		width: width.value
	}))

	useEffect(() => {
		width.value = withTiming(150 * (currentStep / 8), { duration: 500 })
	}, [currentStep])

	return (
		<View style={styles.signUpStepIndicator}>
			<View style={styles.signUpStepTextContainer}>
				<Text
					style={[styles.signUpStepText, styles.signUpStepTextOrange]}
				>
					Step {currentStep}
				</Text>
				<Text style={styles.signUpStepText}>Out of</Text>
				<Text
					style={[styles.signUpStepText, styles.signUpStepTextOrange]}
				>
					Step 8
				</Text>
			</View>
			<View style={styles.signUpStepProgressBar}>
				<Animated.View
					style={[styles.signUpStepProgress, animatedStyle]}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	signUpStepIndicator: {
		flexDirection: "column",
		gap: 5,
		alignItems: "center"
	},
	signUpStepTextContainer: {
		flexDirection: "row",
		gap: 5,
		alignItems: "center"
	},
	signUpStepText: {
		fontWeight: "500"
	},
	signUpStepTextOrange: {
		color: "#E35F21"
	},
	signUpStepProgressBar: {
		height: 5,
		width: 150,
		borderRadius: 2.5,
		backgroundColor: "lightgrey"
	},
	signUpStepProgress: {
		height: "100%",
		borderRadius: 2.5,
		backgroundColor: "#E35F21"
	}
})

SignUpProgress.propTypes = {
	currentStep: PropTypes.number.isRequired
}
