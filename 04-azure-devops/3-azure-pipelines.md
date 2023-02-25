# PIPELINES

Build,test and deploy with CI/CD that works with any language, platform, and cloud. Connect to GitHub or any other Git provider and deploy continuously.

Pipelines used to get code into production, a build pipeline and a release pipeline.

**Build Pipeline**
- Manages what gets built
- Takes code from source control. So in this case, it's gonna grab it from our Azure repo, but it doesn't have to live there.

**Release Pipeline**
- Manages wheres
- Artifact come from Bulid Pipeline and w put it through a series of steps, and then we release that artifact into different environments and those environments can be a test environment, it can be an acceptance environment, and then finally it can be production environment.

## CI / CD

- **Continuous Integration / Continuous Deployment**
- **Pipelines are where CI/CD happens**
- Uses a build agent
- Creates a build artifact - like Docker image


**YAML**

YAML is a human-readable data serialization standard, often used to configuration files.

> 'config as a code'

**Serialization**, translates data structures or object state into a format that can be stored and reconstructed later in a different computer environment.

----

- This is the driving philosophy behind CI/CD. Teams will be largely self-managed and responsive to changing requirements from customers and product owners

- Any connections settings needed by the app should be stored In the connection strings in the App Service.

- You should not set secrets in the variables of the YAML file. Set them in the pipeline editor using the web editor. For more, see
[docs azure](https://docs.microsoft.com/en-us/azure/devops/pipelines/process/variables?view=azure-devops&tabs=yaml%2Cbatch)
