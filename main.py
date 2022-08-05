import requests

data = {
    "email": "Firstname@gmail.com",    "password": "Firstname@gmail.com"
}
head = {"Content-Type": "application/json"}
resp = requests.post(
    "https://mighty-spire-15674.herokuapp.com/auth/login", json=data, headers=head)
print(resp.text, resp.status_code, resp.headers)
