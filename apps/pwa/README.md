- The "src/app/(activation)" route is unique to each branch ("activation1" and "activation2"). To ensure the correct version after switching branches or merging, use the following command to restore "(activation)" to its previous state:

git restore --source=HEAD@{1} -- src/app/\(activation\)

- And for remove the current commit:

git reset --hard HEAD~1
