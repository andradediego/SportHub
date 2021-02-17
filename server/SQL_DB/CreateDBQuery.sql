-- New block of code
DROP DATABASE IF EXISTS [SportHub]
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

