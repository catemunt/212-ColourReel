# import the necessary packages
import numpy as np
import cv2
from flask import Flask, render_template, request, redirect, url_for
import sqlite3

app = Flask(__name__)

DATADB = 'data.db'


def centroid_histogram(clt):
	# grab the number of different clusters and create a histogram
	# based on the number of pixels assigned to each cluster
	numLabels = np.arange(0, len(np.unique(clt.labels_)) + 1)
	(hist, _) = np.histogram(clt.labels_, bins = numLabels)

	# normalize the histogram, such that it sums to one
	hist = hist.astype("float")
	hist /= hist.sum()




	# return the histogram
	return hist


def plot_colors(hist, centroids, count):
	# initialize the bar chart representing the relative frequency
	# of each of the colors
	bar = np.zeros((50, 300, 3), dtype = "uint8")
	startX = 0


	# loop over the percentage of each cluster and the color of
	# each cluster
	colorsx = ''
	percentagex = ''
	for (percent, color) in zip(hist, centroids):
		# plot the relative percentage of each cluster
		endX = startX + (percent * 300)
		cv2.rectangle(bar, (int(startX), 0), (int(endX), 50),
			color.astype("uint8").tolist(), -1)
		startX = endX
		#print(np.round(color, 0).astype(int))
		#print(np.round(percent*100, 0).astype(int))
		colors = list((np.round(color, 0).astype(int)))
		slices = (np.round(percent*100, 0).astype(int))

		percentage = (np.round(percent*100, 0).astype(int))
		count = count

		if len(colorsx) <=50:
			colorsx += str(colors) + ", "
		else:
			colorsx += str(colors)

		if len(percentagex) <=12:
			percentagex += str(percentage) + ", "
		else:
			percentagex += str(percentage)
		#print(count)
		#print(colors)
		#print(slices)
	print(colorsx)
	print(percentagex)
	addColours(colorsx,percentagex,count)


def addColours(colorsx,percentagex,count):
	colors = str(colorsx)
	percentage = str(percentagex)
	count = int(count)
	con = sqlite3.connect(DATADB)
	#print("Opened database successfully")
	cur = con.execute('UPDATE films SET colours=?, percentage =? WHERE id =?', (colors, '[' + percentage +']' , count))
	#('UPDATE userInfo SET username=? WHERE username=?', (new_username, old_username))
	con.commit()
	con.close()
