import csv
import pymongo

myclient = pymongo.MongoClient ("mongodb://localhost:27017/")
mydb = myclient["LandTemp"]
mycol = mydb["Temperature"]

with open ('GlobalTemperatures.csv') as csvfile:
    readCSV =csv.reader(csvfile, delimiter=',')

    thislist =[]

    for row in readCSV:
        thisdict = {
            "Country" : row[0],
            "Year" : row[1],
            "Value" : row[2]
            
        }

        thislist.append(thisdict)
        mycol.insert_one(thisdict)