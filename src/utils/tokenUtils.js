
import {AES,enc} from 'crypto-js'
import secureLocalStorage from 'react-secure-storage';
// set up machanism of encrypt and decrypted accesstoken
const ENCRYPT_KEY= import.meta.env.VITE_ENCRYPTED_KEY;


//set up encrypt with crypto-js to encrypted the accesstoken
export const encrtypedToken = (encrypted)=> {

    const dataEncrypted = AES.encrypt(encrypted,ENCRYPT_KEY).toString(); 
    console.log("========?dataEncrypted: ", dataEncrypted)
    return dataEncrypted;


}

//store accessToken 
export const  storeAccessToken = (accessToken)=>{
    console.log("=====> accessToken: <====", accessToken);
    const dataEncrypted = encrtypedToken(accessToken);
    console.log("=======? ", dataEncrypted)
    secureLocalStorage.setItem(ENCRYPT_KEY,dataEncrypted);
}

// descrypted accessToken 
export const decryptedAccessToken = (encryptedToken) => {
    if(encrtypedToken){
        const descryptedAccessToken = AES.decrypt(encryptedToken, ENCRYPT_KEY);
        return descryptedAccessToken.toString(enc.Utf8);
    }
}

//getDecryptAccessToken
export const getDecryptedAccessToken = () => {
  const encryptedToken = secureLocalStorage.getItem(ENCRYPT_KEY);
  console.log("The encryptedToken: ", encryptedToken)
  if (encryptedToken) {
    return decryptedAccessToken(encryptedToken);
  }
  return null;
};



