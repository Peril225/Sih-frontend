import requests

data = {
    "name": "weibergjdnfw",
    "email": "WFsedfw@gmail.com",
    "password": "Weascdsdcscfwf"
}
head = {"Content-Type": "application/json"}
resp = requests.post(
    "https://sih-backend.srikharshashish.repl.co/auth/register", json=data, headers=head)
print(resp.text)
