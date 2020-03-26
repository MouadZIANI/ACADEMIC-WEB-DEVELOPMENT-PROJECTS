import 'dart:io';
import 'dart:math';

class Bicycle {
  int candence;
  int _speed = 0;
  int gear;
  Bicycle(this.candence, this.gear);
  int get speed => _speed;

  String toString() => 'Bicycle : $candence';

  void speedUp(int deg) {
    this._speed += deg;
  }

  void applyBrake(int deg) {
    this._speed -= deg;
  }


}

class Rectangle {
  int width;
  int height;
  Point origin;

  Rectangle({this.origin = const Point(0, 0), this.width = 0, this.height = 0})

  @override
  String toString() {
    return super.toString();
  }
}

void main() {
  var b = Bicycle(15, 19);
  print(b);
}
