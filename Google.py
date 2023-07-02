#!/usr/bin/env python3

array = [2,5,5,2,3,5,1,2,4]
storeArray = []


#O(n^2)
def findFirstRepeatedElement2(array):
	for i in range(len(array)):
	    for j in range(i+1, len(array)):
   	        if array[i] == array[j]:
   	        	return array[i]



#O(n^2)
def findFirstRepeatedElement(array):
	index = 0
	for element in array: #O(n)
		if element in storeArray: #O(n)
			result = "Found Repeated element at index " + str(index) + "\nThe Repeated element is: " + str(element)
			return result
		else:
			storeArray.append(element)
		index+=1
	return "undefined"


print(findFirstRepeatedElement(array))

