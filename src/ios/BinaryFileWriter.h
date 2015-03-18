#import <Cordova/CDV.h>

@interface BinaryFileWriter : CDVPlugin

- (void)writeToFile:(CDVInvokedUrlCommand*)command;

@end
