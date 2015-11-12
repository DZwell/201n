import os

print("the working directory is" + os.getcwd())

my_dir = '/Users/danielzwelling1/Documents/Coding Stuff/Code Fellows/201n/catDog/'

dirs = os.listdir(my_dir)

counter = 1

for file in dirs:
    new_file = os.rename(file, "IMG_" + str(counter) + ".jpg")
    counter += 1
    print(new_file)
