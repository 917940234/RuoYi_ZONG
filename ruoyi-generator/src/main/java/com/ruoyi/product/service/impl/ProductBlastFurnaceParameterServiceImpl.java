package com.ruoyi.product.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ruoyi.product.mapper.ProductBlastFurnaceParameterMapper;
import com.ruoyi.product.domain.ProductBlastFurnaceParameter;
import com.ruoyi.product.service.IProductBlastFurnaceParameterService;
import com.ruoyi.common.core.text.Convert;

/**
 * 参数设置Service业务层处理
 * 
 * @author zongyoucheng
 * @date 2022-10-19
 */
@Service
public class ProductBlastFurnaceParameterServiceImpl implements IProductBlastFurnaceParameterService 
{
    @Autowired
    private ProductBlastFurnaceParameterMapper productBlastFurnaceParameterMapper;

    /**
     * 查询参数设置
     * 
     * @param tankAgeCoefficient 参数设置主键
     * @return 参数设置
     */
    @Override
    public ProductBlastFurnaceParameter selectProductBlastFurnaceParameterByTankAgeCoefficient(Long tankAgeCoefficient)
    {
        return productBlastFurnaceParameterMapper.selectProductBlastFurnaceParameterByTankAgeCoefficient(tankAgeCoefficient);
    }

    /**
     * 查询参数设置列表
     * 
     * @param productBlastFurnaceParameter 参数设置
     * @return 参数设置
     */
    @Override
    public List<ProductBlastFurnaceParameter> selectProductBlastFurnaceParameterList(ProductBlastFurnaceParameter productBlastFurnaceParameter)
    {
        return productBlastFurnaceParameterMapper.selectProductBlastFurnaceParameterList(productBlastFurnaceParameter);
    }

    /**
     * 新增参数设置
     * 
     * @param productBlastFurnaceParameter 参数设置
     * @return 结果
     */
    @Override
    public int insertProductBlastFurnaceParameter(ProductBlastFurnaceParameter productBlastFurnaceParameter)
    {
        return productBlastFurnaceParameterMapper.insertProductBlastFurnaceParameter(productBlastFurnaceParameter);
    }

    /**
     * 修改参数设置
     * 
     * @param productBlastFurnaceParameter 参数设置
     * @return 结果
     */
    @Override
    public int updateProductBlastFurnaceParameter(ProductBlastFurnaceParameter productBlastFurnaceParameter)
    {
        return productBlastFurnaceParameterMapper.updateProductBlastFurnaceParameter(productBlastFurnaceParameter);
    }

    /**
     * 批量删除参数设置
     * 
     * @param tankAgeCoefficients 需要删除的参数设置主键
     * @return 结果
     */
    @Override
    public int deleteProductBlastFurnaceParameterByTankAgeCoefficients(String tankAgeCoefficients)
    {
        return productBlastFurnaceParameterMapper.deleteProductBlastFurnaceParameterByTankAgeCoefficients(Convert.toStrArray(tankAgeCoefficients));
    }

    /**
     * 删除参数设置信息
     * 
     * @param tankAgeCoefficient 参数设置主键
     * @return 结果
     */
    @Override
    public int deleteProductBlastFurnaceParameterByTankAgeCoefficient(Long tankAgeCoefficient)
    {
        return productBlastFurnaceParameterMapper.deleteProductBlastFurnaceParameterByTankAgeCoefficient(tankAgeCoefficient);
    }
}
