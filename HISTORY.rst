.. :changelog:

v0.1.1 (2015-12-05)
-------------------

Fix
~~~

- *requirements*: Specific about Django version. [Petri Jokimies]







- Replace Google API. Fixes #2. [Petri Jokimies]

Documentation
~~~~~~~~~~~~~

- Generated new HISTORY. [Petri Jokimies]

v0.1.0 (2015-11-22)
-------------------

New features
~~~~~~~~~~~~

- Eslint taken into use. [Petri Jokimies]

- *ui*: Added refresh icon to feed panels. [Petri Jokimies]




- *ui*: Feeds can be deleted. [Petri Jokimies]

- *feed*: Add submit function, use new sercives. [Petri Jokimies]




- *layout*: Show three feeds per column. [Petri Jokimies]




- *feed*: Store new feed to server. [Petri Jokimies]

- *feed*: 'Add new feed' dialog added. [Petri Jokimies]






- *ui*: First version to show existing feeds. [Petri Jokimies]




- *admin*: Register to admin interface. [Petri Jokimies]

- *feed*: Feed list & creation via API with tests. [Petri Jokimies]

Fix
~~~

- Don't load needed 3rd party js & css. [Petri Jokimies]




- *ui*: Panel size set, trash can added to panel title. [Petri Jokimies]




- *models*: Initial migrations. [Petri Jokimies]

Refactor
~~~~~~~~

- *feed*: Feed service is handling http failures. [Petri Jokimies]




- *category*: Category service is handling http failures. [Petri
  Jokimies]




- Angular code restructure. [Petri Jokimies]




- *models*: Rename Feed.feed_url to Feed.url. [Petri Jokimies]

- *models*: Update date_checked & date_updated automatically. [Petri
  Jokimies]

- *category*: Removed own category creation functions. [Petri Jokimies]

Documentation
~~~~~~~~~~~~~

- README update. [Petri Jokimies]

Other
~~~~~

- Some css for 'Add' button  and feed panels. [Petri Jokimies]

- Don't use btn-primary. [Petri Jokimies]






- *new feed*: Don't allow invalid form to be submitted. [Petri Jokimies]

- *category*: Test for creating category. [Petri Jokimies]




- *category*: API read test for Category API. [Petri Jokimies]

- First feed model test. [Petri Jokimies]

- Removed Quicstart for now. [Petri Jokimies]

- Initial commit. [Petri Jokimies]
