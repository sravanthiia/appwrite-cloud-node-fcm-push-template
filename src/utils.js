import admin from 'firebase-admin'


try{
  throwIfMissing(process.env, [
    'FCM_PROJECT_ID',
    'FCM_PRIVATE_KEY',
    'FCM_CLIENT_EMAIL',
    'FCM_DATABASE_URL',
  ]);

// initailze firebase app
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "myapp-a7db7",
    clientEmail: "firebase-adminsdk-w9xu8@myapp-a7db7.iam.gserviceaccount.com",
    privateKey: "-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDQR89dSb7/bFNr
lLXXmlYLeJBM9YF5MVCPBZn5EFh5S9ULDuMDrzuZ+5xLRHGqm6Ibv6pfbrVDBbWt
WwqEqhDWcdXu/ktKslhELdqHiHo9ukDMzf5A9UBX7B/t7w9+/Z1J09JYH+2wRwes
cfEha/+ZpQqIT8dddWRYHWr430o1rEe28Hd+pUfeLgq372RJE5O75g0apCgwAvLU
vYqLov/uKl+mGOc6DfDugGJfvnJpr6HqTWzSc6izFsNYBetmfpw3Zp653jRow+mZ
u0EKSdc/O9DsjjVv1PR4nitIVl6KzmlYrsBz/wtRXcPt9OMTxpxuAKBYNyUnrafb
xgQcebqTAgMBAAECggEAX7AuH6DK5BRDexB2PpiEYX7BZOoB0skKRrr/E0MkMo3Z
UdxEBaRTEJpdIuNOCWC5KGB1CKUXF7Se1AcYnPx5AdyIueUQeD/Zd3FNjajw6D0S
mkUlQ3ipV/t+a9TB3Mjto0Zyw9PfYnYvm1U5v+4bHt6JKTjl0hUlxam2RKJpOKCZ
0WP7FU/5KBZOpEoYZP79GA1xuosZjkeeveOXP5uReTJ4Xzk32PY1GLINebnZ6zJX
lNQBMneQBAMV8MdDDr+sMX/Adc8qkqst/g5Sv3IHNQ+lZ2zpDR4N6V8jmp5tEUke
CNidv9HXN1KesV5bYS/sCQuG8OfuA7nhJbXRQIlfQQKBgQD8CQCyVkUJ6/MSvs3A
bh/SnMLADWDg7jVJ9EfqzjG+FlrDApDlIcCrDHJDUFT6y++ojnSVvxvY1/eRGWKj
GI4KUK5uH1VMRfCyeSAFi4wDjlPzxY1grnMNtnwWa4IAW38WIkhE+Rs3NBVcZ9XF
Y3ejD0n7eGks1uKmsbx6BfcBIQKBgQDTjpkrM5cWVTQMymMg6I2FMAToGAucrYcd
X3dSxAZdI0miUi7z+IlIYAR+v6F7/puEeWndtkKlL5E2417zIHzrkzV/ymXxBcHf
jNtVf101SAMpSFjeq0RFKEXENeRy3X1C0fJrQPDYcwF+cCab1+KBrm+hu6/y03FA
/K1SfvdhMwKBgCPJu3mXWnJQONHemiTK/mXPsK/Itor6CEMaFuQ2p0WQsw6h3KVM
p6kiOU9ppsd+EefjYpao7nFaKWNHMYRrRjAcyMgGVvxfqhANtwhSim0u1qj00mB6
JQg7c19ToMAgPemMsKpqnPy3vpjCfc5rk19qGl1E+dpOIRz+e/7vveVBAoGBAMW/
Vgbey0xRyjxmdXBOT/J95yg3SatjPJfFI5kWqEgo8uwqW78qwtAHCEydvUlUvXN/
tehLNFKJevhOYfNqm7nruSdBPjajxgu6804gpjRmoqXU/VTty/vE4Cm+olKIHEz4
R9vfMQFxxqS0GjK0AgJr1ebctGOLJyKyzSP+kCenAoGAC3Kf4GkO9cORmNwFlKhO
35IIYGxXzlfpUwKU/AEan//ZgqCci50ofl442KS4Ha4s/WQp1HDRO8HaRkwLpmfo
pqE/+/dSmPa/co2f6pF0OEgvd04OzsSdPMtkYdAcR9MxX7ztUosCdcSns/9Lamh9
ZWpQbfqhg8NOw6V2TgyimHI=
-----END PRIVATE KEY-----
",
  }),
  databaseURL: "https://myapp-a7db7-default-rtdb.firebaseio.com/",
});}
catch(e){
  console.log(e)
  throw e
}

/**
 * Throws an error if any of the keys are missing from the object
 * @param {*} obj
 * @param {string[]} keys
 * @throws {Error}
 */
export function throwIfMissing(obj, keys) {
  const missing = [];
  for (let key of keys) {
    if (!(key in obj) || !obj[key]) {
      missing.push(key);
    }
  }
  if (missing.length > 0) {
    throw new Error(`Missing required fields: ${missing.join(', ')}`);
  }
}

/**
 * @param {admin.messaging.Message} payload
 * @returns {Promise<string>}
 */
export async function sendPushNotification(payload) {
 console. log(`Message: ${JSON.stringify(payload)}`);

  try {
    return await admin.messaging().send(payload);
  }
  catch (e) {
    throw (`error on messaging ${e}`)
  }
}
