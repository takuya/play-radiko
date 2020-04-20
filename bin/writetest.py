



import tempfile
import pdb

temp = tempfile.NamedTemporaryFile()

lines = ['a','b']
lines = [( x+"\n").encode() for x in lines]

temp.writelines(lines)
temp.flush()


pdb.set_trace()