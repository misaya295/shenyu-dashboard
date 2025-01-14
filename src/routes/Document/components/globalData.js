/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const Method = {
  0: "GET",
  1: "HEAD",
  2: "POST",
  3: "PUT",
  4: "PATCH",
  5: "DELETE",
  6: "OPTIONS",
  7: "TRACE"
};

export const RPCTYPE = [
  "http",
  "dubbo",
  "sofa",
  "tars",
  "websocket",
  "springCloud",
  "motan",
  "grpc"
];

export const API_SOURCE_TYPE = [
  "swagger",
  "annotation generation",
  "create manuallym",
  "import swagger",
  "import yapi"
];

export const STATE_TYPE = [
  "unpublished",
  "published",
  "offline"
];
