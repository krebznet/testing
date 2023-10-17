import http from 'k6/http';
import { sleep } from 'k6';

const url = 'https://returns-domain-manager-uat.apps-np.homedepot.com/returns/transaction/retrieval';
const payload = JSON.stringify({
    "receiptKey": {
      "manualLookup": "true",
      "transactionDate": "2023-06-28",
      "transactionNumber": "0436",
      "storeNumber": "5608"
    },
    "clientInfo": {
      "storeNumber": "5608",
      "registerNumber": "32",
      "refundDate": "2023-09-28",
      "countryCode": "US"
    }
  });

export let options = {
	stages: [
			{
				duration: '5m',target:60
			},
			{
				duration: '10m',target:60
			},
			{
				duration: '5m',target:0
			},
		]
}

export default function(){

	var params = {
		headers: {
			'Cotent-Type':'application/json',
			'UUID':'c6e8224c-03b3-4f7e-91bd-d3645e909dcf',
			'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJzcGlmZmU6Ly9ob21lZGVwb3QuZGV2L3JldHVybnMtZG9tYWluLW1hbmFnZXIiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9mYjdlNjcxMS1iNjE5LTRmYmUtYWZlNi1mODNiMTI2NzMzMjMvIiwiaWF0IjoxNjk3MTE4MjA0LCJuYmYiOjE2OTcxMTgyMDQsImV4cCI6MTY5NzEyMjEwNCwiYWlvIjoiRTJGZ1lPQmpLTitzdmJQK0U4ZXVRTlZ2SDFhSkFnQT0iLCJhcHBpZCI6IjZjMzM2NTNkLWY4ZDktNDBhNy1hZDM3LTA0MTg5NjYxNTUzYyIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2ZiN2U2NzExLWI2MTktNGZiZS1hZmU2LWY4M2IxMjY3MzMyMy8iLCJvaWQiOiJkZDJjNDg2Yi03MDY3LTQ2NTAtYmNiNS1iYjRhM2I0Mzc2MzEiLCJyaCI6IjAuQVE0QUVXZC0teG0ydmstdjV2ZzdFbWN6STFJSjd0aUZzVFJDc2szNF9taUpWaUVPQUFBLiIsInJvbGVzIjpbInNwaWZmZTovL2hvbWVkZXBvdC5kZXYvcmV0dXJucy1kb21haW4tbWFuYWdlciJdLCJzdWIiOiJkZDJjNDg2Yi03MDY3LTQ2NTAtYmNiNS1iYjRhM2I0Mzc2MzEiLCJ0aWQiOiJmYjdlNjcxMS1iNjE5LTRmYmUtYWZlNi1mODNiMTI2NzMzMjMiLCJ1dGkiOiJaOEhRamlRQmVVT2t3WjZBTUdtdkFBIiwidmVyIjoiMS4wIn0.T82iP4YSDde1CA0WsaYpkgTCHcr9zUCvuTUhHv9oYjHa35z2tq0CX8u_t8K5co0Zfez1qPRhvw4LAYzhzeGDzDfzW0C9YtdSLpL4waYNEFaWvnNZaJfCEAEpWGS3VY9izS2HrYdOumy_R9rDj3OLGWgmZBgVbvpR_JgnqOhrbT0kvJK7wvsx1ophR8CtS7aoRMB3CK5RCoEezKD4pyf3LcKYwC753f2fKbqjZIuvy86BbHidgNRx57o6HUFk18Tf1YwY9_ezXzrI3-XuI6_DwJ8dRsPpDm213UJsOdCNnkqakowEn3m6Kkg4yEivR3J-x_6QZolEcCTQJ20VEMGEpg'
		},
	};

	http.post(url,payload,params);

	sleep(1);

}
