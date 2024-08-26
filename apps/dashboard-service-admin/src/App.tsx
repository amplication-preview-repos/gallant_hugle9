import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EmployeeInfoList } from "./employeeInfo/EmployeeInfoList";
import { EmployeeInfoCreate } from "./employeeInfo/EmployeeInfoCreate";
import { EmployeeInfoEdit } from "./employeeInfo/EmployeeInfoEdit";
import { EmployeeInfoShow } from "./employeeInfo/EmployeeInfoShow";
import { AnalyzedHistoryList } from "./analyzedHistory/AnalyzedHistoryList";
import { AnalyzedHistoryCreate } from "./analyzedHistory/AnalyzedHistoryCreate";
import { AnalyzedHistoryEdit } from "./analyzedHistory/AnalyzedHistoryEdit";
import { AnalyzedHistoryShow } from "./analyzedHistory/AnalyzedHistoryShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"dashboard-service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="EmployeeInfo"
          list={EmployeeInfoList}
          edit={EmployeeInfoEdit}
          create={EmployeeInfoCreate}
          show={EmployeeInfoShow}
        />
        <Resource
          name="AnalyzedHistory"
          list={AnalyzedHistoryList}
          edit={AnalyzedHistoryEdit}
          create={AnalyzedHistoryCreate}
          show={AnalyzedHistoryShow}
        />
      </Admin>
    </div>
  );
};

export default App;
