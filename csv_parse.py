import csv
import sys

with open('original2.csv', 'r+Ub') as csvfile:
	#reader = csv.reader(open(test.csv), dialect=csv.excel_tab)
	reader = csv.reader(csvfile, delimiter=',' , dialect=csv.excel_tab)
	for row in reader:
		counter = 0
		day_average = 0
		firsttwo = 1

		day = 1;

		name = ""
		longitude = 0
		latitude = 0
		x = ""

		for word in row:
			if firsttwo == 1:
			 name = word
			 firsttwo +=1;
			elif firsttwo == 2:
			 longitude = word
			 firsttwo +=1;
			elif firsttwo == 3:
			 latitude = word
			 firsttwo +=1;
			elif firsttwo == 4:
			 x = word
			 firsttwo +=1;
			else:
				counter+=1
				if word.isdigit():
					day_average += int(word)
				else:
					day_average += 0
				if counter == 24:
					print name + "," + longitude + "," + latitude + "," + x + "," + str(day) + "," + str(day_average/100000000.0)

					day += 1
					day_average = 0
					counter = 0
		


