package com.ruoyi.product.service;

import java.util.List;
import com.ruoyi.product.domain.ProductBlastFurnaceParameter;

/**
 * 参数设置Service接口
 * 
 * @author zongyoucheng
 * @date 2022-10-19
 */
public interface IProductBlastFurnaceParameterService 
{
    /**
     * 查询参数设置
     * 
     * @param tankAgeCoefficient 参数设置主键
     * @return 参数设置
     */
    public ProductBlastFurnaceParameter selectProductBlastFurnaceParameterByTankAgeCoefficient(Long tankAgeCoefficient);

    /**
     * 查询参数设置列表
     * 
     * @param productBlastFurnaceParameter 参数设置
     * @return 参数设置集合
     */
    public List<ProductBlastFurnaceParameter> selectProductBlastFurnaceParameterList(ProductBlastFurnaceParameter productBlastFurnaceParameter);

    /**
     * 新增参数设置
     * 
     * @param productBlastFurnaceParameter 参数设置
     * @return 结果
     */
    public int insertProductBlastFurnaceParameter(ProductBlastFurnaceParameter productBlastFurnaceParameter);

    /**
     * 修改参数设置
     * 
     * @param productBlastFurnaceParameter 参数设置
     * @return 结果
     */
    public int updateProductBlastFurnaceParameter(ProductBlastFurnaceParameter productBlastFurnaceParameter);

    /**
     * 批量删除参数设置
     * 
     * @param tankAgeCoefficients 需要删除的参数设置主键集合
     * @return 结果
     */
    public int deleteProductBlastFurnaceParameterByTankAgeCoefficients(String tankAgeCoefficients);

    /**
     * 删除参数设置信息
     * 
     * @param tankAgeCoefficient 参数设置主键
     * @return 结果
     */
    public int deleteProductBlastFurnaceParameterByTankAgeCoefficient(Long tankAgeCoefficient);
}
