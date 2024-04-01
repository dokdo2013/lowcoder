import { ConfigToType } from "lowcoder-sdk/dataSource";

const queryConfig = {
  type: "query",
  label: "Action",
  actions: [
    {
      actionName: "StartConfigurationSession",
      label: "Start Configuration Session",
      params: [
        {
          label: "Application Identifier",
          key: "ApplicationIdentifier",
          type: "textInput",
          tooltip: "The Application ID to retrieve configuration from"
        },
        {
          label: "Environment Identifier",
          key: "EnvironmentIdentifier",
          type: "textInput",
          tooltip: "The Environment ID to retrieve configuration from"
        },
        {
          label: "Configuration Profile Identifier",
          key: "ConfigurationProfileIdentifier",
          type: "textInput",
          tooltip: "The Configuration Profile ID to retrieve configuration from"
        },
        {
          label: "Required Minimum Poll Interval In Seconds",
          key: "RequiredMinimumPollIntervalInSeconds",
          type: "numberInput",
          tooltip: "???"
        }
      ]
    },
    {
      actionName: "GetLatestConfiguration",
      label: "Get Latest Configuration",
      params: [
        {
          label: "Application Identifier",
          key: "ApplicationIdentifier",
          type: "textInput",
          tooltip: "The Application ID to retrieve configuration from"
        },
        {
          label: "Environment Identifier",
          key: "EnvironmentIdentifier",
          type: "textInput",
          tooltip: "The Environment ID to retrieve configuration from"
        },
        {
          label: "Configuration Profile Identifier",
          key: "ConfigurationProfileIdentifier",
          type: "textInput",
          tooltip: "The Configuration Profile ID to retrieve configuration from"
        },
        {
          label: "Required Minimum Poll Interval In Seconds",
          key: "RequiredMinimumPollIntervalInSeconds",
          type: "numberInput",
          tooltip: "???"
        },
        {
          label: "Configuration Token",
          key: "ConfigurationToken",
          type: "textInput",
          tooltip: "???"
        }
      ]
    },
    {
      actionName: "ListApplications",
      label: "List Applications",
      params: [
        {
          label: "Max Results",
          key: "MaxResults",
          type: "numberInput",
          defaultValue: 50,
          tooltip:
            "The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results."
        },
        {
          label: "Next Token",
          key: "NextToken",
          type: "textInput",
          tooltip:
            "A token to start the list. Next token is a pagination token generated by AppConfig to describe what page the previous List call ended on. For the first List request, the nextToken should not be set. On subsequent calls, the nextToken parameter should be set to the previous responses nextToken value. Use this token to get the next set of results."
        }
      ]
    },
    {
      actionName: "CreateApplicationCommand",
      label: "Create Application",
      params: [
        {
          label: "Name",
          key: "Name",
          type: "textInput",
          tooltip: "A name for the application."
        },
        {
          label: "Description",
          key: "Description",
          type: "textInput",
          tooltip: "A description of the application."
        },
        {
          label: "Tags",
          key: "Tags",
          type: "jsonInput",
          tooltip: "Metadata to assign to the application. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define."
        }
      ]
    },
    {
      actionName: "CreateConfigurationProfileCommand",
      label: "Create Configuration Profile",
      params: [
        {
          label: "Application ID",
          key: "ApplicationID",
          type: "textInput",
          tooltip: "The application ID."
        },
        {
          label: "Description",
          key: "Description",
          type: "textInput",
          tooltip: "A description of the configuration profile."
        },
        {
          label: "Name",
          key: "Name",
          type: "textInput",
          tooltip: "A name for the configuration profile."
        },
        {
          label: "Location Uri",
          key: "LocationUri",
          type: "textInput",
          tooltip: "A URI to locate the configuration. You can specify the following:"
        },
        {
          label: "Retrieval Role Arn",
          key: "RetrievalRoleArn",
          type: "textInput",
          tooltip: "The ARN of an IAM role with permission to access the configuration at the specified LocationUri. A retrieval role ARN is not required for configurations stored in the AppConfig hosted configuration store. It is required for all other sources that store your configuration."
        },
        {
          label: "Type",
          key: "Type",
          type: "select",
          tooltip: "The ARN of an IAM role with permission to access the configuration at the specified LocationUri. A retrieval role ARN is not required for configurations stored in the AppConfig hosted configuration store. It is required for all other sources that store your configuration.",
          options: [
            { label: "Feature Flags", value: "AWS.AppConfig.FeatureFlags" },
            { label: "Freeform", value: "AWS.Freeform" }
          ]
        },
        {
          label: "Tags",
          key: "Tags",
          type: "jsonInput",
          tooltip: "Metadata to assign to the application. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define."
        },
        {
          label: "Kms Key Identifier",
          key: "KmsKeyIdentifier",
          type: "textInput",
          tooltip: "The identifier for an Key Management Service key to encrypt new configuration data versions in the AppConfig hosted configuration store. This attribute is only used for hosted configuration types. The identifier can be an KMS key ID, alias, or the Amazon Resource Name (ARN) of the key ID or alias. To encrypt data managed in other configuration stores, see the documentation for how to specify an KMS key for that particular service."
        },
        {
          label: "Validators",
          key: "Validators",
          type: "jsonInput",
          tooltip: "A list of methods for validating the configuration."
        }
      ]
    },
    {
      actionName: "CreateDeploymentStrategyCommand",
      label: "Create Deployment Strategy",
      params: [
        {
          label: "Name",
          key: "Name",
          type: "textInput",
          tooltip: "A name for the deployment strategy."
        },
        {
          label: "DeploymentDurationInMinutes",
          key: "DeploymentDurationInMinutes",
          type: "numberInput",
          tooltip: "Total amount of time for a deployment to last."
        },
        {
          label: "Description",
          key: "Description",
          type: "textInput",
          tooltip: "A description of the deployment strategy."
        },
        {
          label: "FinalBakeTimeInMinutes",
          key: "FinalBakeTimeInMinutes",
          type: "numberInput",
          tooltip:
            "Specifies the amount of time AppConfig monitors for Amazon CloudWatch alarms after the configuration has been deployed to 100% of its targets, before considering the deployment to be complete. If an alarm is triggered during this time, AppConfig rolls back the deployment. You must configure permissions for AppConfig to roll back based on CloudWatch alarms. For more information, see Configuring permissions for rollback based on Amazon CloudWatch alarms  in the AppConfig User Guide."
        },
        {
          label: "GrowthFactor",
          key: "GrowthFactor",
          type: "numberInput",
          default: 1,
          tooltip: "The percentage of targets to receive a deployed configuration during each interval."
        },
        {
          label: "GrowthType",
          key: "GrowthType",
          type: "select",
          tooltip: "The algorithm used to define how percentage grows over time. AppConfig supports the following growth types:\n" +
            "Linear: For this type, AppConfig processes the deployment by dividing the total number of targets by the value specified for Step percentage. For example, a linear deployment that uses a Step percentage of 10 deploys the configuration to 10 percent of the hosts. After those deployments are complete, the system deploys the configuration to the next 10 percent. This continues until 100% of the targets have successfully received the configuration.\n" +
            "Exponential: For this type, AppConfig processes the deployment exponentially using the following formula: G*(2^N). In this formula, G is the growth factor specified by the user and N is the number of steps until the configuration is deployed to all targets. For example, if you specify a growth factor of 2, then the system rolls out the configuration as follows:\n" +
            "2*(2^0)\n" +
            "2*(2^1)\n" +
            "2*(2^2)\n" +
            "Expressed numerically, the deployment rolls out as follows: 2% of the targets, 4% of the targets, 8% of the targets, and continues until the configuration has been deployed to all targets.",
          options: [
            { label: "Exponential", value: "EXPONENTIAL" },
            { label: "Linear", value: "LINEAR" }
          ]
        },
        {
          label: "ReplicateTo",
          key: "ReplicateTo",
          type: "select",
          tooltip: "Save the deployment strategy to a Systems Manager (SSM) document.",
          options: [
            { label: "None", value: "NONE" },
            { label: "SSM Document", value: "SSM_DOCUMENT" }
          ]
        },
        {
          label: "Tags",
          key: "Tags",
          type: "jsonInput",
          tooltip:
            "Metadata to assign to the environment. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define."
        }
      ]
    },
    {
      actionName: "CreateEnvironmentCommand",
      label: "Create Environment",
      params: [
        {
          label: "Application ID",
          key: "ApplicationId",
          type: "textInput",
          tooltip: "The application ID."
        },
        {
          label: "Name",
          key: "Name",
          type: "textInput",
          tooltip: "A name for the environment."
        },
        {
          label: "Description",
          key: "Description",
          type: "textInput",
          tooltip: "A description of the environment."
        },
        {
          label: "Monitors",
          key: "Monitors",
          type: "jsonInput",
          tooltip: "Amazon CloudWatch alarms to monitor during the deployment process."
        },
        {
          label: "Tags",
          key: "Tags",
          type: "jsonInput",
          tooltip:
            "Metadata to assign to the environment. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define."
        }
      ]
    },
    {
      actionName: "CreateExtensionAssociationCommand",
      label: "Create Extension Association",
      params: [
        {
          label: "Extension Identifier",
          key: "ExtensionIdentifier",
          type: "textInput",
          tooltip: "The name, the ID, or the Amazon Resource Name (ARN) of the extension."
        },
        {
          label: "Extension Version Number",
          key: "ExtensionVersionNumber",
          type: "numberInput",
          tooltip: "The version number of the extension. If not specified, AppConfig uses the maximum version of the extension."
        },
        {
          label: "Parameters",
          key: "Parameters",
          type: "jsonInput",
          tooltip: "The parameter names and values defined in the extensions. Extension parameters marked Required must be entered for this field."
        },
        {
          label: "Resource Identifier",
          key: "ResourceIdentifier",
          type: "textInput",
          tooltip: "The ARN of an application, configuration profile, or environment."
        },
        {
          label: "Tags",
          key: "Tags",
          type: "jsonInput",
          tooltip:
            "Adds one or more tags for the specified extension association. Tags are metadata that help you categorize resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define."
        }
      ]
    },
    {
      actionName: "CreateExtensionCommand",
      label: "Create Extension",
      params: [
        {
          label: "Name",
          key: "Name",
          type: "textInput",
          tooltip: "A name for the extension. Each extension name in your account must be unique. Extension versions use the same name."
        },
        {
          label: "Description",
          key: "Description",
          type: "textInput",
          tooltip: "Information about the extension."
        },
        {
          label: "Parameters",
          key: "Parameters",
          type: "jsonInput",
          tooltip: "The parameters accepted by the extension. You specify parameter values when you associate the extension to an AppConfig resource by using the CreateExtensionAssociation API action. For Lambda extension actions, these parameters are included in the Lambda request object."
        },
        {
          label: "Latest Version Number",
          key: "LatestVersionNumber",
          type: "numberInput",
          tooltip: "You can omit this field when you create an extension. When you create a new version, specify the most recent current version number. For example, you create version 3, enter 2 for this field."
        },
        {
          label: "Tags",
          key: "Tags",
          type: "jsonInput",
          tooltip:
            "Adds one or more tags for the specified extension. Tags are metadata that help you categorize resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define."
        },
        {
          label: "Actions",
          key: "Actions",
          type: "jsonInput",
          tooltip:
            "The actions defined in the extension."
        }
      ]
    },
    {
      actionName: "CreateHostedConfigurationVersionCommand",
      label: "Create Hosted Configuration Version",
      params: [
        {
          label: "Application ID",
          key: "ApplicationId",
          type: "textInput",
          tooltip: "The ID of the application."
        },
        {
          label: "Configuration Profile ID",
          key: "ConfigurationProfileId",
          type: "textInput",
          tooltip: "The ID of the configuration profile."
        },
        {
          label: "Content",
          key: "Content",
          type: "textInput",
          tooltip: "The content of the configuration or the configuration data."
        },
        {
          label: "Content Type",
          key: "ContentType",
          type: "textInput",
          default: "application/json",
          tooltip:
            "A standard MIME type describing the format of the configuration content. For more information, see Content-Type. https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17"
        },
        {
          label: "Latest Version Number",
          key: "LatestVersionNumber",
          type: "numberInput",
          tooltip:
            "An optional locking token used to prevent race conditions from overwriting configuration updates when creating a new version. To ensure your data is not overwritten when creating multiple hosted configuration versions in rapid succession, specify the version number of the latest hosted configuration version."
        },
        {
          label: "Version Label",
          key: "VersionLabel",
          type: "textInput",
          tooltip:
            "An optional, user-defined label for the AppConfig hosted configuration version. This value must contain at least one non-numeric character. For example, \"v2.2.0\"."
        },
        {
          label: "Description",
          key: "Description",
          type: "textInput",
          tooltip: "A description of the configuration."
        }
      ]
    },
    {
      actionName: "DeleteApplicationCommand",
      label: "Delete Application",
      params: [
        {
          label: "Application ID",
          key: "applicationId",
          type: "textInput",
          tooltip: "The ID of the application to delete."
        }
      ]
    },
    {
      actionName: "DeleteConfigurationProfileCommand",
      label: "Delete Configuration Profile",
      params: [
        {
          label: "Application ID",
          key: "ApplicationId",
          type: "textInput",
          tooltip: "The application ID that includes the configuration profile you want to delete."
        },
        {
          label: "Configuration Profile Id",
          key: "ConfigurationProfileId",
          type: "textInput",
          tooltip: "The ID of the configuration profile you want to delete."
        }
      ]
    },
    {
      actionName: "DeleteDeploymentStrategyCommand",
      label: "Delete Deployment Strategy",
      params: [
        {
          label: "Deployment Strategy Id",
          key: "DeploymentStrategyId",
          type: "textInput",
          tooltip: "The ID of the deployment strategy you want to delete."
        }
      ]
    },
    {
      actionName: "DeleteEnvironmentCommand",
      label: "Delete Environment",
      params: [
        {
          label: "Application ID",
          key: "ApplicationId",
          type: "textInput",
          tooltip: "The application ID that includes the environment that you want to delete."
        },
        {
          label: "Environment ID",
          key: "EnvironmentId",
          type: "textInput",
          tooltip: "The ID of the environment that you want to delete."
        }]
    },
    {
      actionName: "DeleteExtensionAssociationCommand",
      label: "Delete Extension Association",
      params: []
    },
    {
      actionName: "DeleteExtensionCommand",
      label: "Delete Extension",
      params: []
    },
    {
      actionName: "DeleteHostedConfigurationVersionCommand",
      label: "Delete Hosted Configuration Version",
      params: []
    },
    {
      actionName: "GetApplicationCommand",
      label: "Get Application",
      params: [
        {
          label: "Application ID",
          key: "applicationId",
          type: "textInput",
          tooltip: "Specify the applicationId to retrieve"
        }
      ]
    },
    {
      actionName: "GetConfigurationCommand (Deprecated)",
      label: "Get Configuration",
      params: []
    },
    {
      actionName: "GetConfigurationProfileCommand",
      label: "Get Configuration Profile",
      params: []
    },
    {
      actionName: "GetDeploymentCommand",
      label: "Get Deployment",
      params: []
    },
    {
      actionName: "GetDeploymentStrategyCommand",
      label: "Get Deployment Strategy",
      params: []
    },
    {
      actionName: "GetEnvironmentCommand",
      label: "Get Environment",
      params: [
        {
          label: "Application ID",
          key: "ApplicationId",
          type: "textInput",
          tooltip: "Specify the Application ID to retrieve the environments for."
        },
        {
          label: "Environment ID",
          key: "EnvironmentId",
          type: "textInput",
          tooltip: "Specify the Environment ID to retrieve the environments for."
        }
      ]
    },
    {
      actionName: "GetExtensionAssociationCommand",
      label: "Get Extension Association",
      params: []
    },
    {
      actionName: "GetExtensionCommand",
      label: "Get Extension",
      params: []
    },
    {
      actionName: "GetHostedConfigurationVersionCommand",
      label: "Get Hosted Configuration Version",
      params: []
    },
    {
      actionName: "ListApplicationsCommand",
      label: "List Applications",
      params: []
    },
    {
      actionName: "ListConfigurationProfilesCommand",
      label: "List Configuration Profiles",
      params: [
        {
          label: "Application ID",
          key: "ApplicationId",
          type: "textInput",
          tooltip: "Specify the Application ID to retrieve the configuration profiles for."
        }
      ]
    },
    {
      actionName: "ListDeploymentStrategiesCommand",
      label: "List Deployment Strategies",
      params: []
    },
    {
      actionName: "ListDeploymentsCommand",
      label: "List Deployments",
      params: []
    },
    {
      actionName: "ListEnvironmentsCommand",
      label: "List Environments",
      params: [
        {
          label: "Application ID",
          key: "ApplicationId",
          type: "textInput",
          tooltip: "Specify the Application ID to retrieve the environments for."
        }
      ]
    },
    {
      actionName: "ListExtensionAssociationsCommand",
      label: "List Extension Associations",
      params: []
    },
    {
      actionName: "ListExtensionsCommand",
      label: "List Extensions",
      params: []
    },
    {
      actionName: "ListHostedConfigurationVersionsCommand",
      label: "List Hosted Configuration Versions",
      params: []
    },
    {
      actionName: "ListTagsForResourceCommand",
      label: "List Tags For Resource",
      params: []
    },
    {
      actionName: "StartDeploymentCommand",
      label: "Start Deployment",
      params: [
        {
          label: "Application ID",
          key: "ApplicationId",
          type: "textInput",
          tooltip: "The application ID."
        },
        {
          label: "Environment ID",
          key: "EnvironmentId",
          type: "textInput",
          tooltip: "The environment ID."
        },
        {
          label: "Deployment Strategy ID",
          key: "DeploymentStrategyId",
          type: "textInput",
          tooltip: "The deployment strategy ID."
        },
        {
          label: "Configuration Profile ID",
          key: "ConfigurationProfileId",
          type: "textInput",
          tooltip: "The configuration profile ID."
        },
        {
          label: "Configuration Version",
          key: "ConfigurationVersion",
          type: "textInput",
          default: undefined,
          tooltip:
            "The configuration version to deploy. If deploying an AppConfig hosted configuration version, you can specify either the version number or version label. For all other configurations, you must specify the version number."
        },
        {
          label: "Description",
          key: "Description",
          type: "textInput",
          tooltip: "A description of the deployment."
        },
        {
          label: "Tags",
          key: "Tags",
          type: "jsonInput",
          tooltip:
            "Metadata to assign to the application. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define."
        },
        {
          label: "Kms Key Identifier",
          key: "KmsKeyIdentifier",
          type: "textInput",
          tooltip:
            "The identifier for an Key Management Service key to encrypt new configuration data versions in the AppConfig hosted configuration store. This attribute is only used for hosted configuration types. The identifier can be an KMS key ID, alias, or the Amazon Resource Name (ARN) of the key ID or alias. To encrypt data managed in other configuration stores, see the documentation for how to specify an KMS key for that particular service."
        },
        {
          label: "Dynamic Extension Parameters",
          key: "DynamicExtensionParameters",
          type: "jsonInput",
          tooltip:
            "A map of dynamic extension parameter names to values to pass to associated extensions with PRE_START_DEPLOYMENT actions."
        }
      ]

    },
    {
      actionName: "StopDeploymentCommand",
      label: "Stop Deployment",
      params: []
    },
    {
      actionName: "TagResourceCommand",
      label: "Tag Resource",
      params: []
    },
    {
      actionName: "UntagResourceCommand",
      label: "Untag Resource",
      params: []
    },
    {
      actionName: "UpdateApplicationCommand",
      label: "Update Application",
      params: [
        {
          label: "Application ID",
          key: "ApplicationId",
          type: "textInput",
          tooltip: "The application ID."
        },
        {
          label: "Name",
          key: "Name",
          type: "textInput",
          tooltip: "The name of the application."
        },
        {
          label: "Description",
          key: "Description",
          type: "textInput",
          tooltip: "A description of the application."
        }
      ]
    },
    {
      actionName: "UpdateConfigurationProfileCommand",
      label: "Update Configuration Profile",
      params: [
        {
          label: "Application ID",
          key: "ApplicationId",
          type: "textInput",
          tooltip: "The application ID."
        },
        {
          label: "Configuration Profile ID",
          key: "ConfigurationProfileId",
          type: "textInput",
          tooltip: "The ID of the configuration profile."
        },
        {
          label: "Description",
          key: "Description",
          type: "textInput",
          tooltip: "A description of the configuration profile."
        },
        {
          label: "Name",
          key: "Name",
          type: "textInput",
          tooltip: "A name for the configuration profile."
        },
        {
          label: "Retrieval Role Arn",
          key: "RetrievalRoleArn",
          type: "textInput",
          tooltip: "The ARN of an IAM role with permission to access the configuration at the specified LocationUri. A retrieval role ARN is not required for configurations stored in the AppConfig hosted configuration store. It is required for all other sources that store your configuration."
        },
        {
          label: "Kms Key Identifier",
          key: "KmsKeyIdentifier",
          type: "textInput",
          tooltip: "The identifier for an Key Management Service key to encrypt new configuration data versions in the AppConfig hosted configuration store. This attribute is only used for hosted configuration types. The identifier can be an KMS key ID, alias, or the Amazon Resource Name (ARN) of the key ID or alias. To encrypt data managed in other configuration stores, see the documentation for how to specify an KMS key for that particular service."
        },
        {
          label: "Validators",
          key: "Validators",
          type: "jsonInput",
          tooltip: "A list of methods for validating the configuration."
        }
      ]

    },
    {
      actionName: "UpdateDeploymentStrategyCommand",
      label: "Update Deployment Strategy",
      params: []
    },
    {
      actionName: "UpdateEnvironmentCommand",
      label: "Update Environment",
      params: []
    },
    {
      actionName: "UpdateExtensionAssociationCommand",
      label: "Update Extension Association",
      params: []
    },
    {
      actionName: "UpdateExtensionCommand",
      label: "Update Extension",
      params: []
    },
    {
      actionName: "ValidateConfigurationCommand",
      label: "Validate Configuration",
      params: []
    }
  ]
} as const;

export type ActionDataType = ConfigToType<typeof queryConfig>;

export default queryConfig;
