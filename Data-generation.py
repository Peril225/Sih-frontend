import csv
import random
import json
state = ["Andhra Pradesh",
         "Arunachal Pradesh",
         "Assam",
         "Bihar",
         "Chhattisgarh",
         "Goa",
         "Gujarat",
         "Haryana",
         "Himachal Pradesh",
         "Jammu and Kashmir",
         "Jharkhand",
         "Karnataka",
         "Kerala",
         "Madhya Pradesh",
         "Maharashtra",
         "Manipur",
         "Meghalaya",
         "Mizoram",
         "Nagaland",
         "Odisha",
         "Punjab",
         "Rajasthan",
         "Sikkim",
         "Tamil Nadu",
         "Telangana",
         "Tripura",
         "Uttarakhand",
         "Uttar Pradesh",
         "West Bengal",
         "Andaman and Nicobar Islands",
         "Chandigarh",
         "Dadra and Nagar Haveli",
         "Daman and Diu",
         "Delhi",
         "Lakshadweep",
         "Puducherry"]

"""[
    {
        States :
    }
]
"""
dic = []

# with open(r"DATA\JsonFiles\csv.csv", "w+", newline="") as m:
#     csvfile = csv.writer(m)
#     csvfile.writerow(
#         ["year", "state", "male_percent", "no_of_schools",  "cost_of_education"])
#     for i in range(0, 23):
#         for k in state:
#             lis = [2000 + i, k,
#                    random.randint(40, 70), 30000 + i*random.randint(3000, 4000), 500000 + (i//3)*50000]
#             csvfile.writerow(lis)
lis = [
    {"State": "an", "name": "Andaman and Nicobar Islands"},
    {"State": "ap", "name": "Andhra Pradesh"},
    {"State": "ar", "name": "Arunachal Pradesh"},
    {"State": "as", "name": "Assam"},
    {"State": "br", "name": "Bihar"},
    {"State": "ch", "name": "Chandigarh"},
    {"State": "ct", "name": "Chhattisgarh"},
    {"State": "dn", "name": "Dadra and Nagar Havel"},
    {"State": "dd", "name": "Daman and Diu"},
    {"State": "dl", "name": "Delhi"},
    {"State": "ga", "name": "Goa"},
    {"State": "gj", "name": "Gujarat"},
    {"State": "hr", "name": "Haryana"},
    {"State": "hp", "name": "Himachal Pradesh"},
    {"State": "jk", "name": "Jammu and Kashmir"},
    {"State": "jh", "name": "Jharkhand"},
    {"State": "ka", "name": "Karnataka"},
    {"State": "kl", "name": "Kerala"},
    {"State": "ld", "name": "Lakshadweep"},
    {"State": "mp", "name": "Madhya Pradesh"},
    {"State": "mh", "name": "Maharashtra"},
    {"State": "mn", "name": "Manipur"},
    {"State": "ml", "name": "Meghalaya"},
    {"State": "mz", "name": "Mizoram"},
    {"State": "nl", "name": "Nagaland"},
    {"State": "or", "name": "Odisha"},
    {"State": "py", "name": "Puducherry"},
    {"State": "pb", "name": "Punjab"},
    {"State": "rj", "name": "Rajasthan"},
    {"State": "sk", "name": "Sikkim"},
    {"State": "tn", "name": "Tamil Nadu"},
    {"State": "tg", "name": "Telangana"},
    {"State": "tr", "name": "Tripura"},
    {"State": "up", "name": "Uttar Pradesh"},
    {"State": "ut", "name": "Uttarakhand"},
    {"State": "wb", "name": "West Bengal"},
]
liss = []
for i in lis:
    liss.append(
        {"State": i["State"], "val":  round(random.uniform(0.33, 0.66), 2)}
    )
print(liss)

# le = [{'State': 'an', 'val': 0.34}, {'State': 'ap', 'val': 0.46}, {'State': 'ar', 'val': 0.53}, {'State': 'as', 'val': 0.49}, {'State': 'br', 'val': 0.55}, {'State': 'ch', 'val': 0.5}, {'State': 'ct', 'val': 0.54}, {'State': 'dn', 'val': 0.37}, {'State': 'dd', 'val': 0.36}, {'State': 'dl', 'val': 0.66}, {'State': 'ga', 'val': 0.36}, {'State': 'gj', 'val': 0.37}, {'State': 'hr', 'val': 0.35}, {'State': 'hp', 'val': 0.44}, {'State': 'jk', 'val': 0.58}, {'State': 'jh', 'val': 0.6}, {'State': 'ka', 'val': 0.57}, {'State': 'kl', 'val': 0.41}, {'State': 'ld', 'val': 0.42}, {'State': 'mp', 'val': 0.62}, {'State': 'mh', 'val': 0.56}, {'State': 'mn', 'val': 0.58}, {'State': 'ml', 'val': 0.56}, {'State': 'mz', 'val': 0.48}, {'State': 'nl', 'val': 0.64}, {'State': 'or', 'val': 0.54}, {'State': 'py', 'val': 0.35}, {'State': 'pb', 'val': 0.38}, {'State': 'rj', 'val': 0.36}, {'State': 'sk',
#                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            'val': 0.44}, {'State': 'tn', 'val': 0.49}, {'State': 'tg', 'val': 0.39}, {'State': 'tr', 'val': 0.4}, {'State': 'up', 'val': 0.4}, {'State': 'ut', 'val': 0.36}, {'State': 'wb', 'val': 0.51}]
