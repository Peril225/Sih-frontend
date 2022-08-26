import uuid
import csv
import random
import json
# state = ["Andhra Pradesh",
#          "Arunachal Pradesh",
#          "Assam",
#          "Bihar",
#          "Chhattisgarh",
#          "Goa",
#          "Gujarat",
#          "Haryana",
#          "Himachal Pradesh",
#          "Jammu and Kashmir",
#          "Jharkhand",
#          "Karnataka",
#          "Kerala",
#          "Madhya Pradesh",
#          "Maharashtra",
#          "Manipur",
#          "Meghalaya",
#          "Mizoram",
#          "Nagaland",
#          "Odisha",
#          "Punjab",
#          "Rajasthan",
#          "Sikkim",
#          "Tamil Nadu",
#          "Telangana",
#          "Tripura",
#          "Uttarakhand",
#          "Uttar Pradesh",
#          "West Bengal",
#          "Andaman and Nicobar Islands",
#          "Chandigarh",
#          "Dadra and Nagar Haveli",
#          "Daman and Diu",
#          "Delhi",
#          "Lakshadweep",
#          "Puducherry"]

# """[
#     {
#         States :
#     }
# ]
# """
# dic = []

# # with open(r"DATA\JsonFiles\csv.csv", "w+", newline="") as m:
# #     csvfile = csv.writer(m)
# #     csvfile.writerow(
# #         ["year", "state", "male_percent", "no_of_schools",  "cost_of_education"])
# #     for i in range(0, 23):
# #         for k in state:
# #             lis = [2000 + i, k,
# #                    random.randint(40, 70), 30000 + i*random.randint(3000, 4000), 500000 + (i//3)*50000]
# #             csvfile.writerow(lis)
# lis = [
#     {"State": "an", "name": "Andaman and Nicobar Islands"},
#     {"State": "ap", "name": "Andhra Pradesh"},
#     {"State": "ar", "name": "Arunachal Pradesh"},
#     {"State": "as", "name": "Assam"},
#     {"State": "br", "name": "Bihar"},
#     {"State": "ch", "name": "Chandigarh"},
#     {"State": "ct", "name": "Chhattisgarh"},
#     {"State": "dn", "name": "Dadra and Nagar Havel"},
#     {"State": "dd", "name": "Daman and Diu"},
#     {"State": "dl", "name": "Delhi"},
#     {"State": "ga", "name": "Goa"},
#     {"State": "gj", "name": "Gujarat"},
#     {"State": "hr", "name": "Haryana"},
#     {"State": "hp", "name": "Himachal Pradesh"},
#     {"State": "jk", "name": "Jammu and Kashmir"},
#     {"State": "jh", "name": "Jharkhand"},
#     {"State": "ka", "name": "Karnataka"},
#     {"State": "kl", "name": "Kerala"},
#     {"State": "ld", "name": "Lakshadweep"},
#     {"State": "mp", "name": "Madhya Pradesh"},
#     {"State": "mh", "name": "Maharashtra"},
#     {"State": "mn", "name": "Manipur"},
#     {"State": "ml", "name": "Meghalaya"},
#     {"State": "mz", "name": "Mizoram"},
#     {"State": "nl", "name": "Nagaland"},
#     {"State": "or", "name": "Odisha"},
#     {"State": "py", "name": "Puducherry"},
#     {"State": "pb", "name": "Punjab"},
#     {"State": "rj", "name": "Rajasthan"},
#     {"State": "sk", "name": "Sikkim"},
#     {"State": "tn", "name": "Tamil Nadu"},
#     {"State": "tg", "name": "Telangana"},
#     {"State": "tr", "name": "Tripura"},
#     {"State": "up", "name": "Uttar Pradesh"},
#     {"State": "ut", "name": "Uttarakhand"},
#     {"State": "wb", "name": "West Bengal"},
# ]

# dic = {}
# scls = ["A P S W R School", "Apswrschool Sangam", "Sspvzphs Patavala",
#         "Zpphs Chebrolu", "Svvr Zph School Nakarikallu", "Zilla Parishad High School Guduru",
#         "Zilla Praja Parishad High School, Kaligiri", "Zillla Parishat High School Gajuwaka", "Zphs Challapeta",
#         "Z P High School Girls Kodumur ", "GOVERNMENT HIGHER SECONDARY SCHOOL THRIZINO", "R C E S MODEL SCHOOL",
#         "ZPHS, Kovvali", "ZPHS, Rameswaram", "ZPHS, Nadergul", "ZPHS, Ingilipakalanka", "ZPHS, Dathaipally", "ZPHS, Dharmaram",
#         "Zilla Parishad Girls High School Sircilla", "Zpss Tm Em Chennnur", "Tsms Ganmukla", "Zpss Ramanujavaram", "Zphs Boys Wanaparthy", "Zphs Dhanwada Boys"
#         "Zphs Marchala", "Zphs Pamulaparthy", "Zphs Singannaguda", "Zphs Kolanupaka", "Zphs Dharpally", "Shantiniketan Vidyalaya",
#         "Zphs Hasmathpet", "Zphs Jillelaguda", "Zpss Dharmaram", "Telangana State Model School Narmetta", "Spr School Of Excellence High School",
#         "Government High School Rajendranagar", "Zilla Parishad High School Madhapur", "Zphs Kolanupaka", "Zphs Athmakur", "Zphs Pamulaparthy",
#         "Zphs Singannaguda", "Jawahar Navodaya Vidyalaya Warangal", "Zphs Boys Wanaparthy", "Government High School Malakpet",
#         "Government High School Kulsumpura", "Zpss Echoda", "Ttwrschool Girls Asifabad", "Zphs Kondurg", "Zphs Badangpet", "Telangana State Model School Narmetta"]
# schools = []
# sch_ids = []
# i: str
# for i in scls:
#     schid = uuid.uuid4()
#     sch_ids.append(str(schid))
#     school_obj = {
#         "_id": str(schid),
#         "name": i,
#         "State": random.choice(state),
#         "Students": []
#     }
#     schools.append(school_obj)
# with open("JSON.json", "w+") as fi:
#     fi.write(json.dumps(schools))
# input("jjjvgyy")
# sch_admin = []
# for i in scls:
#     schid = uuid.uuid4()
#     school_obj = {
#         "_id": str(schid),
#         "email": i.split()[-1] + "@gmail.com",
#         "password": "$2b$10$WSjn.h5T.LCuPdiQ4b3dO.td5xDR.3vLcf54nQhqrSfjo32ybWwDe",
#         "schoolid": random.choice(sch_ids),

#     }
#     sch_admin.append(school_obj)
# with open("JSON.json", "w+") as fi:
#     fi.write(json.dumps(sch_admin))
# input("erg")
# students = ["Les_Tristan", "Jude_Mordecai", "Vincent_Ken", "Jeffrey_Alfred", "Zoltan_Enoch", "Humberto_Jax", "Maison_Yuri", "Rene_Shannon", "Shadrach_Stacy", "Dudley_Rylan", "Abdul_Tarquin", "Titus_Devon", "Simeon_Milan", "Russell_Bret", "Bryon_Herman", "Wilbert_Callum", "Mason_Niklaus", "Denis_Gideon", "Benedict_Camden", "Euan_Neil", "Ethan_Nicolas", "Coby_Butch", "Brenden_Kennedy", "Linus_Murray", "Emet_Alexis", "Joseph_Joshua", "Ozzie_Sawyer", "Rodrigo_Darwin", "Dane_Chris", "Daxter_Carson", "Ashwin_Miguel", "Tiberius_Raylan", "Porter_Jeffery", "Jonas_Rafferty", "Cliff_Ernest", "Petar_Lochlan", "Alvin_Emil", "Derrick_Yahir", "Zaine_Ruben", "Patrick_Leigh", "Cai_Castiel", "Han_Jaydon", "Sebestian_Dave", "Avery_Westin", "Jett_Timmy", "Josiah_Hayes", "Elon_Kasper", "Eden_Dylan", "Link_Javid", "Collin_Seb", "Brady_Augustus", "Johnathan_Peter", "Josiah_Caleb", "Dwight_Jose", "Art_Francesco", "Raiden_Kingsley", "Chevy_Karson", "Rian_Rahul", "Kade_Paddy", "Zeke_Remington", "Lane_Nasir", "Kristian_Jerome", "Mason_Crosby", "Alberto_Samson", "Kellen_Brenden", "Jai_Louie", "Joey_Winston", "Ciaran_Bruno", "Braxton_Kelly", "Milton_Muhammad", "Albie_Marlon", "Devlin_Lamar", "Kyler_Elon", "Clark_Jesus", "Colton_Tyler", "Tate_Barney", "Vijay_Jermaine", "Dallas_Giovanni", "Kirby_Alton", "Murray_Kendrick", "Xavier_Sawyer", "Cody_Kayden", "Reece_Earl", "Bentley_Nash", "Malcolm_Barrett", "Adonis_Boyd", "Grayson_Micah", "Eugene_Jaydon", "Nestor_Sherwin", "Colm_Daire", "Marshall_Nihal", "Robby_Zachery", "Colin_Petar", "Carsten_Kyran", "Drake_Bodie", "Cayson_Tex", "Pascal_Fox", "Princeton_Anson", "Henley_Sid", "Avery_Ade",
#             "Eoghan_Marlon", "Ace_Jordan", "Brod_Ryker", "Klay_Fred", "Roscoe_Ahmed", "Raul_Giorgio", "Nate_Remington", "Terrance_Johnathan", "Yusuf_Kendall", "Kris_Lowell", "Lonnie_Marc", "Percy_Russell", "Cecil_Dallas", "Marcel_Jagger", "Gareth_Caesar", "Alec_Julio", "Kendrick_Edmund", "Ernesto_Roy", "Thaddeus_Danny", "Guillermo_Ronan", "Trace_Tracey", "Alexis_Francisco", "Maverick_Maximilian", "Bradwin_Valentino", "Shannon_Galen", "Jackson_Joshua", "Yahir_Neal", "Darius_Bray", "Kyran_Atticus", "Francisco_Rian", "Freddy_Bennie", "Perry_Baxter", "Tate_Jakob", "Patrick_Tiberius", "Darragh_Charles", "Garrett_Nik", "Marcus_Leonardo", "Teague_Jeremiah", "Jace_Jaylen", "Jan_Lebron", "Aspen_Kasper", "Cayson_Killian", "Gannon_Nigel", "Connor_Roberto", "Gerry_Martyn", "Robert_Damian", "Leighton_Maddox", "Brady_Clark", "Dick_Klay", "Marco_Jak", "Adam_Stanley", "Campbell_Neal", "Bram_Aldric", "Judah_Quincy", "Elijah_Luca", "Holden_Tommie", "Granger_Lukas", "Garth_Jett", "Keith_Francesco", "Kai_Grady", "Maurice_Dacey", "Niklaus_Oscar", "Griffin_Trace", "Benji_Dominick", "Camron_Jaret", "Jeffery_Zachariah", "Logan_Kayle", "Kyrin_Glenn", "Maverick_Fergal", "Nikolas_Klaus", "Kayson_Clinton", "Imran_Henley", "Matt_Hywel", "Archer_Jeffery", "Bjorn_Kayden", "Chip_Sufyan", "Gustavo_Tristan", "Ren_Larry", "Jevan_Sullivan", "Hendrix_Kit", "Cristobal_Ajay", "Herman_Calum", "Tyson_Clint", "Ayden_Bradwin", "Aron_Roman", "Cai_Morgan", "Flynn_Kayden", "Zackary_Steven", "Al_Blake", "Devin_Bray", "Jake_Jago", "Raylan_Edsel", "Benson_Zuriel", "Lars_York", "Knox_Rufus", "Emanuel_Xerxes", "Conrad_Miguel", "Jackie_Bray", "Isiah_Osvaldo", "Kirk_Geoffrey"]
# stds = []
# for i in range(0, 201):
#     name = random.choice(students)
#     stu_obj = {
#         "_id": str(uuid.uuid4()),
#         "name": name,
#         "email": name.split()[0] + "@gmail.com",
#         "school": random.choice(sch_ids),
#         "standard": random.randint(1, 16),
#         "past_PASS":  random.randint(60, 100),
#         "Approval": False
#     }
#     stds.append(stu_obj)
# with open("JSON.json", "w+") as fi:
#     fi.write(json.dumps(stds))


st = ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand",
      "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand"]

dic = {}
for i in st:
    # a =
    # b = random.randint(20, 50)
    # c = 100 - a - b
    dic[i] = [random.randint(10, 30), random.randint(
        70, 90), random.randint(70, 90), random.randint(30, 60)]

print(dic)
