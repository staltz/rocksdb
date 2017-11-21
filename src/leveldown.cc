/* Copyright (c) 2012-2017 LevelDOWN contributors
 * See list at <https://github.com/level/leveldown#contributing>
 * MIT License <https://github.com/level/leveldown/blob/master/LICENSE.md>
 */

#include <node.h>

#include "leveldown.h"
#include "database.h"
#include "iterator.h"
#include "batch.h"
#include "leveldown_async.h"

namespace leveldown {

NAN_METHOD(DestroyDB) {
  Nan::HandleScope scope;

  Nan::Utf8String* location = new Nan::Utf8String(info[0]);

  Nan::Callback* callback = new Nan::Callback(
      v8::Local<v8::Function>::Cast(info[1]));

  DestroyWorker* worker = new DestroyWorker(
      location
    , callback
  );

  Nan::AsyncQueueWorker(worker);

  info.GetReturnValue().SetUndefined();
}

void Init (v8::Local<v8::Object> target) {
  Database::Init();
  leveldown::Iterator::Init();
  leveldown::Batch::Init();

  v8::Local<v8::Function> leveldown =
      Nan::New<v8::FunctionTemplate>(LevelDOWN)->GetFunction();

  leveldown->Set(
      Nan::New("destroy").ToLocalChecked()
    , Nan::New<v8::FunctionTemplate>(DestroyDB)->GetFunction()
  );

  target->Set(Nan::New("leveldown").ToLocalChecked(), leveldown);
}

NODE_MODULE(leveldown, Init)

} // namespace leveldown
