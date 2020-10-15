# USAGE
# python color_kmeans.py --image images/jp.png --clusters 3

# import the necessary packages
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt
import argparse
import utils
import cv2
from utils import addColours

count = 1

for i in range (143):

	count = str(count)
	poster = 'images/' + count + '.jpg'
	print(poster)
	clusters = 5
	count = int(count)

	# load the image and convert it from BGR to RGB so that
	# we can dispaly it with matplotlib
	image = cv2.imread(poster)
	image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

	# reshape the image to be a list of pixels
	image = image.reshape((image.shape[0] * image.shape[1], 3))

	# cluster the pixel intensities
	clt = KMeans(n_clusters = clusters)
	clt.fit(image)

	# build a histogram of clusters and then create a figure
	# representing the number of pixels labeled to each color
	hist = utils.centroid_histogram(clt)
	bar = utils.plot_colors(hist, clt.cluster_centers_,count)

	count += 1
