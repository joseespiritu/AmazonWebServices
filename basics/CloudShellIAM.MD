# Commands for IAM from CloudShell

### List Users
```
aws iam list-users
```
### Create User
```
aws iam create-user --user-name user1
```
### Create Login profile for user
```
aws iam create-login-profile --generate-cli-skeleton > create-login-profile.json
aws iam create-login-profile --cli-input-json file://create-login-profile.json
```
### Attach Policy to User
```
aws iam attach-user-policy --policy-arn arn:aws:iam::aws:policy/AmazonS3FullAccess --user-name user1
```
### Create Access Key for user
```
aws iam create-access-key --user-name user1
```
### Create Group
```
aws iam create-group --group-name Admins2
aws iam add-user-to-group --user-name user1 --group-name Admins2 
```