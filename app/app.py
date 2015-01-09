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
data_avg_fall_read = []
data_avg_spring_break = []
data_avg_spring_final = []
data_avg_spring_mid = []
data_avg_spring_read = []
data_intersession = []
data_reunions = []
data_summer_break = []
data_winter_break = []

def parseCSV( filename, array ):
	with open(filename, 'r+Ub') as csvfile:
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

			array.append(newObject)
			locLookup[location]= newObject

alldata = 'static/alldata.csv'
parseCSV(alldata, data)

average_fall_read = 'static/average_fall_read.csv'
average_spring_break = 'static/average_spring_break.csv'
average_spring_final = 'static/average_spring_final.csv'
average_spring_mid = 'static/average_spring_mid.csv'
average_spring_read = 'static/average_spring_read.csv'
intersession = 'static/intersession.csv'
reunions = 'static/reunions.csv'
summer_break = 'static/summer_break.csv'
winter_break = 'static/winter_break.csv'

parseCSV(average_fall_read, data_avg_fall_read)
# parseCSV(average_spring_break, data_avg_spring_break)
# parseCSV(average_spring_final, data_avg_spring_final)
# parseCSV(average_spring_mid, data_avg_spring_mid)
# parseCSV(average_spring_read, data_avg_spring_read)
# parseCSV(intersession, data_intersession)
# parseCSV(reunions, data_reunions)
# parseCSV(summer_break, data_summer_break)
# parseCSV(winter_break, data_winter_break)

@app.route("/")
def index():
	return app.send_static_file("map.html")

@app.route("/getlocations/<int:time>", methods=["GET"])
def getlocations(time):
	return jsonify(things = [x.serialize(time) for x in data])
	#return jsonify(data[0].serialize(1))

@app.route("/angela1")
def angela1():
	return jsonify(things = [y.serialize() for y in data_avg_fall_read])

@app.route("/lookup", methods=["GET"])
def lookup():
	equad = LongLat(40.347607,-74.6612695)
	return locLookup.get(equad).usage[0]


if __name__ == "__main__":
    app.run()