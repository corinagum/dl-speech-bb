const COGNITIVE_SERVICE_KEY = 'INSERT_YOUR_COGNITIVE_SERVICE_KEY';
const COGNITIVE_SERVICE_REGION = 'westus2';
const RENEW_EVERY = 300000;

let fetchPromise;
let lastFetch = 0;

async function region() {
  const { region } = await fetchCredentials();

  return region;
}

async function token() {
  const { token } = await fetchCredentials();

  return token;
}

// This fetch function will be called every time Web Speech recognizer or synthesizer start
// You are advised to cache the token to prevent unnecessary network call and delay
async function fetchCredentials() {
  const now = Date.now();

  if (!fetchPromise || now - lastFetch > RENEW_EVERY) {
    fetchPromise = fetch(
      `https://${COGNITIVE_SERVICE_REGION}.api.cognitive.microsoft.com/sts/v1.0/issueToken`,
      {
        headers: { "Ocp-Apim-Subscription-Key": COGNITIVE_SERVICE_KEY },
        method: "POST"
      }
    )
      .then(res =>
        res.ok
          ? res.text()
          : Promise.reject(
              `Cognitive Services returned ${res.status} while generating a new token`
            )
      )
      .then(res => res.text())
      .then(authorizationToken => ({
        authorizationToken,
        region: COGNITIVE_SERVICE_REGION
      }))
      .catch(() => {
        lastFetch = 0;
      });

    lastFetch = now;
  }

  return fetchPromise;
}

export default fetchCredentials;
export { region, token };
