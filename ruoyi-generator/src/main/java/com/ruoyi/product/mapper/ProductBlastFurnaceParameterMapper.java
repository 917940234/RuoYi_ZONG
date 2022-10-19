package com.ruoyi.product.mapper;

import java.util.List;
import com.ruoyi.product.domain.ProductBlastFurnaceParameter;

/**
 * 参数设置Mapper接口
 * 
 * @author zongyoucheng
 * @date 2022-10-19
 */
public interface ProductBlastFurnaceParameterMapper 
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
     * 删除参数设置
     * 
     * @param tankAgeCoefficient 参数设置主键
     * @return 结果
     */
    public int deleteProductBlastFurnaceParameterByTankAgeCoefficient(Long tankAgeCoefficient);

    /**
     * 批量删除参数设置
     * 
     * @param tankAgeCoefficients 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteProductBlastFurnaceParameterByTankAgeCoefficients(String[] tankAgeCoefficients);
}
