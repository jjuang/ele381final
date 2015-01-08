from flask import Flask , request, jsonify, redirect
import csv
import sys
import ast

app = Flask(__name__)
app.debug = True

class LongLat:
	def __init__(self, longitude, latitude):
		self.lon = longitude
		self.lat = latitude
	def __hash__(self):
		return hash((self.lon, self.lat))

	def __eq__(self, other):
		return (self.lon, self.lat) == (other.lon, other.lat)

class DataObject:
	def __init__(self, name, longitude, latitude, direction, buildingType, usage):
		self.name = name
		self.longitude = longitude
		self.latitude = latitude
		self.direction = direction
		self.buildingType = buildingType
		self.usage = usage

	def serialize(self, time):
		return {
        	'name': self.name,
        	'longitude': self.longitude,
        	'latitude': self.latitude,
        	'direction': self.direction,
        	'buildingType': self.buildingType,
        	'weight': self.usage[time]
        }

locLookup = dict()
data = []

def parseCSV():
	with open('static/alldata.csv', 'r+Ub') as csvfile:
	#reader = csv.reader(open(test.csv), dialect=csv.excel_tab)
		reader = csv.reader(csvfile, delimiter=',' , dialect=csv.excel_tab)
		for row in reader:
			counter = 1
			arraycounter = 0

			name = ""
			longitude = 0
			latitude = 0
			x = ""
			buildingType = ""
			usage = []

			for word in row:
				if counter == 1:
				 name = word
				 counter +=1;
				elif counter == 2:
					try:
						latitude = float(word)
					except ValueError:
						print word
					counter +=1;
				elif counter == 3:
					try:
						longitude = float(word)
					except ValueError:
						print word
					counter +=1;
				elif counter == 4:
				 x = word
				 counter +=1;
				elif counter == 5:
				 buildingType = word
				 counter +=1;
				else:
					if word.isdigit():
						usage.append(word)
					else:
						usage.append(0)
					arraycounter += 1

			location = LongLat(longitude, latitude)
			newObject = DataObject(name, longitude, latitude, x, buildingType, usage)

			data.append(newObject)
			locLookup[location]= newObject

parseCSV()

@app.route("/")
def index():
	return app.send_static_file("map.html")

@app.route("/getlocations/<int:time>", methods=["GET"])
def getlocations(time):
	return jsonify(things = [x.serialize(time) for x in data])
	#return jsonify(data[0].serialize(1))

@app.route("/lookup", methods=["GET"])
def lookup():
	equad = LongLat(40.347607,-74.6612695)
	return locLookup.get(equad).usage[0]


if __name__ == "__main__":
    app.run()