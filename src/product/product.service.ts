import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product } from "./schema/product.schema";

@Injectable()
export class ProductService {
  constructor(@InjectModel("Product") private productModel: Model<Product>) {}

  create(createProductDto: CreateProductDto) {
    const newProduct = new this.productModel(createProductDto);
    console.log(newProduct);
    //return newProduct.save();
    return "This action adds a new product";
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
