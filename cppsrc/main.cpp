#include <napi.h>
#include <iostream>
#include "Samples/functionexample.h"
Napi::Object InitAll(Napi::Env env, Napi::Object exports)
{
  std::cout << "Init\n";
  return functionexample::Init(env, exports);
}

NODE_API_MODULE(testaddon, InitAll)
