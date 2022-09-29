declare interface IInstaFeedWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
}

declare module 'InstaFeedWebPartStrings' {
  const strings: IInstaFeedWebPartStrings;
  export = strings;
}
