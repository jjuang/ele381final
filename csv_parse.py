import csv
import sys

with open('original2.csv', 'r+Ub') as csvfile:
	#reader = csv.reader(open(test.csv), dialect=csv.excel_tab)
	reader = csv.reader(csvfile, delimiter=',' , dialect=csv.excel_tab)
	for row in reader:
		counter = 0
		day_average = 0
		firsttwo = 1;
		toWrite = "";
		for word in row:
			if firsttwo >= 1 and firsttwo <= 4:
				print word + ",",
				firsttwo = firsttwo + 1
			else:
				counter+=1
				if word.isdigit():
					day_average += int(word)
				else:
					day_average += 0
				if counter == 24:
					print str(day_average/1000000) + ",",
					day_average = 0
					counter = 0
		print '\r\n'


