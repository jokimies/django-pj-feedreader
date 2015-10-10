#!/usr/bin/env python

import re
import sys
from tempfile import mkstemp
from shutil import move
from os import remove, close

file_name = sys.argv[1]

# githchangelog outputs
#
# Changelog
# =========
#
# at the beginning of the file. Replace those two lines with
#
# .. :changelog:

# Also remove everything befoe my first commit
#
# - Initial commit. [Petri Jokimies]

fh, abs_path = mkstemp()
with open(abs_path,'w') as new_file:
    with open(file_name) as old_file:
        for line in old_file:
            line = line.replace("Changelog", ".. :changelog:")
            if re.search("Changelog", line) or re.search("=========", line):
                continue
            if re.search("Initial commit. \[P", line):
                new_file.write(line)
                break
            new_file.write(line)
        else:
            close(fh)
#Remove original file
remove(file_name)
#Move new file
move(abs_path, file_name)

