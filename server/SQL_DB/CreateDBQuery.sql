-- New block of code
DROP DATABASE IF EXISTS [SportHub];
GO

CREATE DATABASE [SportHub];

GO
use [SportHub]

GO

CREATE TABLE Login(
	[LoginId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Email] [nvarchar](50) NOT NULL,
	[Password] [nvarchar](100) NOT NULL,
	[Inactive] [bit] default 0,
	[RegistrationDate] [datetime] DEFAULT getDate(),
 CONSTRAINT [PK_Login] PRIMARY KEY CLUSTERED 
(
	[LoginId] ASC
));

CREATE TABLE Fields(
	[FieldId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](100) NOT NULL,
	[Location] [nvarchar](200) NOT NULL,
	[Description] [nvarchar](500) NOT NULL,
	[src] [nvarchar](500) NOT NULL,
	[RegistrationDate] [datetime] DEFAULT getDate(),
 CONSTRAINT [PK_FieldId] PRIMARY KEY CLUSTERED 
(
	[FieldId] ASC
));


Create table BookFields (
	[BookFieldId] [int] IDENTITY(1,1) NOT NULL Primary Key,
	[LoginId] [int] FOREIGN KEY REFERENCES Login(LoginId),
	[FieldId] [int] FOREIGN KEY REFERENCES Fields(FieldId),
	[BookDateStart] [date] NOT NULL,
	[BookDateFinish] [date] NOT NULL,
	[Inactive] [bit] default 0,
	[RegistrationDate] [datetime] DEFAULT getDate()
)

Create table BookFriendRequest (
	[BookFriendRequestId] [int] IDENTITY(1,1) NOT NULL Primary Key,
	[RequestedLoginId] [int] FOREIGN KEY REFERENCES Login(LoginId),
	[FriendLoginId] [int] FOREIGN KEY REFERENCES Fields(FieldId),
	[AcceptedRequest] [bit] default 0,
	[Inactive] [bit] default 0,
	[RegistrationDate] [datetime] DEFAULT getDate()
)


Create table Friends (
	[FriendLoginId] [int] IDENTITY(1,1) NOT NULL Primary Key,
	[UserLoginId] [int] FOREIGN KEY REFERENCES Login(LoginId),
	[FriendId] [int] FOREIGN KEY REFERENCES Login(LoginId),	
	[AcceptedRequest] [bit] default 0,
	[Inactive] [bit] default 0,
	[RegistrationDate] [datetime] DEFAULT getDate()
)

