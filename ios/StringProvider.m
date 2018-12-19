//
//  StringProvider.m
//  testproj
//
//  Created by cooper smith on 12/19/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "StringProvider.h"

@implementation StringProvider

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getSomeString:(RCTResponseSenderBlock)callback){
  NSString* someString=@"Yumpin' Yimminy!";
  
  callback(@[someString]);
}

@end
