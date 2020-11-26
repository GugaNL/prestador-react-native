//@flow
import { BackHandler, PermissionsAndroid, Platform } from "react-native"

export const permissionsAction = {
	//requestLocationPermission,
	//requestCallPermission,
	requestReadExternalStorage
}


async function requestReadExternalStorage() {
	try {
		const granted = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
		)
		if (
			granted === true ||
			granted === PermissionsAndroid.RESULTS.GRANTED ||
			Platform.OS !== 'android'
		) {
			console.log('granted to use external_storage')
			try {
				const grantedCamera = await PermissionsAndroid.request(
					PermissionsAndroid.PERMISSIONS.CAMERA
				)
				if (
					grantedCamera === true ||
					grantedCamera === PermissionsAndroid.RESULTS.GRANTED ||
					Platform.OS !== 'android'
				) {
					// in case of user agree to use
					return true
				} else {
					return false
				}
			} catch (err) {
				console.warn(err)
			}
		} else {
			// in case of user disagree
			return false
		}
	} catch (err) {
		console.warn(err)
	}
}