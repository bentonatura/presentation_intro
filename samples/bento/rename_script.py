import os
path = '/Users/natura/Projects/slides_blackbox/screenshots2' 
for filename in os.listdir(path):
    if(filename.count('_') != 2):
        continue
    prefix, num, postfix = filename.split('_')
    num = num.zfill(4)
    new_filename = prefix + "_" + num + ".png"
    os.rename(os.path.join(path, filename), os.path.join(path, new_filename))