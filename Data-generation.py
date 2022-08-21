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
with open(r"DATA\JsonFiles\JSON.json", "w+", newline="") as f:
    with open(r"DATA\JsonFiles\csv.csv", "w+", newline="") as m:
        csvfile = csv.writer(m)
        csvfile.writerow(["year", "state", "standard", "oc", "obc", "sc_st"])
        for i in range(0, 23):
            for k in state:
                for j in ["primary", "secondary", "technical"]:
                    oc = random.randint(35, 55)
                    obc = random.randint(30, 40)
                    sc_st = 100 - oc - obc
                    obj = {
                        "year": 2000 + i,
                        "state": k,
                        "standard": j,
                        "oc": oc,
                        "obc": obc,
                        "sc/st": sc_st,
                    }
                    csvfile.writerow([2000 + i, k, j, oc, obc, sc_st])
                    dic.append(obj)
    f.write(json.dumps(dic))
