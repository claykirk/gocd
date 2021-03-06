/*
 * Copyright 2020 ThoughtWorks, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import m from "mithril";
import {Job} from "models/pipeline_configs/job";
import {PipelineConfig} from "models/pipeline_configs/pipeline_config";
import {Stage} from "models/pipeline_configs/stage";
import {TemplateConfig} from "models/pipeline_configs/template_config";
import {EnvironmentVariablesWidget} from "views/components/environment_variables";
import {TabContent} from "views/pages/clicky_pipeline_config/tabs/tab_content";

export abstract class EnvironmentVariablesTabContent extends TabContent<PipelineConfig | Stage | Job> {
  static tabName(): string {
    return "Environment Variables";
  }

  protected renderer(entity: PipelineConfig | Stage | Job, templateConfig: TemplateConfig): m.Children {
    return <EnvironmentVariablesWidget environmentVariables={entity.environmentVariables()}/>;
  }
}
