#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import sys

import pjfeedreader

try:
    from setuptools import setup
except ImportError:
    from distutils.core import setup

version = pjfeedreader.__version__

if sys.argv[-1] == 'publish':
    os.system('python setup.py sdist upload')
    os.system('python setup.py bdist_wheel upload')
    sys.exit()

if sys.argv[-1] == 'tag':
    print("Tagging the version on github:")
    os.system("git tag -a v%s -m 'version %s'" % (version, version))
    os.system("git push --tags")
    sys.exit()

readme = open('README.rst').read()
history = open('HISTORY.rst').read().replace('.. :changelog:', '')

setup(
    name='django-pj-feedreader',
    version=version,
    description="""Django/AngularJS RSS feed reader""",
    long_description=readme + '\n\n' + history,
    author='Petri Jokimies',
    author_email='petri.jokimies@gmail.com',
    url='https://github.com/jokimies/django-pj-feedreader',
    packages=[
        'pjfeedreader',
    ],
    include_package_data=True,
    install_requires=[
    ],
    license="BSD",
    zip_safe=False,
    keywords='django-pj-feedreader',
    classifiers=[
        'Development Status :: 3 - Alpha',
        'Framework :: Django',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: BSD License',
        'Natural Language :: English',
        'Programming Language :: Python :: 2',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.3',
        'Programming Language :: Python :: 3.4',
    ],
)
