  // const subscription = () => {
    //     observable$.subscribe({
    //         next: data => console.log('[data] => ', data),
    //         complete: data => console.log('[complete]'),
    //     });
    // }

     {/* <TouchableOpacity onPress={openGoogleSignin}>
                <View>
                    <Text>hi google</Text>
                </View>
            </TouchableOpacity>
            <App/> */}




    // const openGoogleSignin = async () => {
    //     try {
    //         await GoogleSignin.hasPlayServices()
    //         const userInfo = await GoogleSignin.signIn()
    //         console.log(userInfo, 'userInfo')
    //         const _authToken = userInfo.idToken ? userInfo.idToken : ''
    //         console.log('Google-Access-Token===>', _authToken)
    //         //  doGoogleLogin(_authToken.toString());
    //     } catch (error) {
    //         if (error?.code === statusCodes.SIGN_IN_CANCELLED) {
    //             // showToastInBottom(Title.LOGIN_CANCELLED);
    //             console.log(
    //                 statusCodes.SIGN_IN_CANCELLED,
    //                 'statusCodes.SIGN_IN_CANCELLED',
    //             )
    //         } else if (error?.code === statusCodes.IN_PROGRESS) {
    //             // showToastInBottom(Title.LOGIN_IN_PROGRESS);
    //             console.log(statusCodes.IN_PROGRESS, 'statusCodes.IN_PROGRESS')
    //         } else if (
    //             error?.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE
    //         ) {
    //             // showToastInBottom(Title.PLAY_SERVICES_NOT_AVAILABLE);
    //             console.log(
    //                 statusCodes.PLAY_SERVICES_NOT_AVAILABLE,
    //                 'statusCodes.PLAY_SERVICES_NOT_AVAILABLE',
    //             )
    //         } else {
    //             console.log('statusCodes.SOMETHING_WENT_WRONG')

    //             // showToastInBottom(Title.SOMETHING_WENT_WRONG);
    //         }
    //     }
    // }

//     import {
//     GoogleSignin,
//     statusCodes,
// } from '@react-native-google-signin/google-signin'



//  React.useEffect(() => {
//         GoogleSignin.configure({
//             scopes: ['email'],
//             webClientId:
//                 '58346678539-1nj6gbr4u71e0r9tt9il0qavcevg0mte.apps.googleusercontent.com',
//             iosClientId: '',
//             forceCodeForRefreshToken: true,
//             offlineAccess: true,
//         })
//     }, [])
